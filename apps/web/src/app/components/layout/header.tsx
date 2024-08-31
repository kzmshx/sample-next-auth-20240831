import { LoginButton } from "../login-button";
import { LogoutButton } from "../logout-button";

export function Header() {
	return (
		<div className="h-14 w-full bg-white text-black">
			<div className="flex h-full items-center gap-2">
				<LoginButton />
				<LogoutButton />
			</div>
		</div>
	);
}
