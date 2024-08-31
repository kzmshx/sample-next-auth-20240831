"use client";

import { signOut, useSession } from "next-auth/react";

export const LogoutButton = () => {
	const { status } = useSession();

	if (status !== "authenticated") {
		return null;
	}

	return (
		<button type="button" className="px-4 py-2" onClick={() => signOut()}>
			Logout
		</button>
	);
};
