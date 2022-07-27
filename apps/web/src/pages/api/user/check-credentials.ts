import type { NextApiRequest, NextApiResponse } from "next";
import { hasuraRequest } from "@web/lib/hasuraAdapter";
import { GetMyUserAndPasswordByEmailDocument } from "generated/user-gql";
import {
  withMiddlewares,
  withErrorHandling,
  withMethodsGuard,
} from "@web/lib/middlewares";
import cryptojs from "crypto-js";
import { logger } from "@web/lib/logger";
import { ApiError } from "next/dist/server/api-utils";
import type { PasswordWithAttempt } from "@web/lib/types/crypto";

const isPasswordCorrect = (
  secret: string,
  password: PasswordWithAttempt
): Boolean => {
  const key512Bits = cryptojs.PBKDF2(secret, password.salt, {
    keySize: parseInt(process.env.PBKDF2_KEY_SIZE as string) || 512 / 32,
    iterations: password.iterations,
    hasher: cryptojs.algo.SHA256,
  });
  const hash = key512Bits.toString(cryptojs.enc.Base64);
  return hash === password.hash;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    throw new ApiError(400, "Invalid credentials");
  }
  logger.debug("geting user by email", req.body);
  const data = await hasuraRequest({
    query: GetMyUserAndPasswordByEmailDocument,
    variables: { email: req.body.username },
    admin: true,
  });
  const { passwords, ...user } = data?.users[0];
  const lastPassword = passwords[passwords.length - 1];
  logger.debug({ user, passwords });
  if (isPasswordCorrect(req.body.password, lastPassword)) {
    // on success, if attempt > 0, update with attempt to 0
    res.json(user);
  } else {
    // update with attempt+1
    // if attempt > process.env.PSWD_MAX_ATTEMPTS, block user and ask to reset password
    throw new ApiError(400, "Invalid credentials");
  }
}

export default async function checkCredentials(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return withErrorHandling(
    req,
    res
  )(withMiddlewares(withMethodsGuard(["POST"]), handler));
}
