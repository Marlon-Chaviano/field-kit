import { cn } from "@/lib/utils";
import React from "react";

interface ErrorProps extends React.ComponentProps<"p"> {
	message: string;
	className?: string;
}
const Error = ({ className, message, ...props }: ErrorProps) => {
	return (
		<p
			{...props}
			className={cn("text-sm text-red-500", className)}
		>
			{message}
		</p>
	);
};

export default Error;
