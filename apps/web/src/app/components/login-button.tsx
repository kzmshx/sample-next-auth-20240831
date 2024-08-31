"use client";

import { signIn, useSession } from "next-auth/react";

export function LoginButton() {
	const { status } = useSession();

	if (status !== "unauthenticated") {
		return null;
	}

	return (
		<button type="button" className="px-4 py-2" onClick={() => signIn()}>
			Login
		</button>
	);
}
