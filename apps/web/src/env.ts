import { z } from "zod";

const EnvSchema = z.object({
	GITHUB_ID: z.string(),
	GITHUB_SECRET: z.string(),
});

const createEnv = () => {
	return {
		...process.env,
		...EnvSchema.parse(process.env),
	};
};

export const env = createEnv();
