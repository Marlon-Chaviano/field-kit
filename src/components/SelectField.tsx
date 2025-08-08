import {
	type RegisterOptions,
	useController,
	useFormContext,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { Option } from "./types";
import * as SelectPrimitive from "@radix-ui/react-select";
import Error from "./Error";

interface SelectFieldProps
	extends React.ComponentProps<typeof SelectPrimitive.Root> {
	name: string;
	label?: string;
	options: Option[];
	errorClassName: string;
	placeholder?: string;
	rules?: RegisterOptions;
	className?: string;
	wrapperClassName?: string;
	triggerClassName?: string;
}

function SelectField({
	name,
	options,
	rules,
	className,
	placeholder,
	triggerClassName,
	wrapperClassName,
	errorClassName,
	label,
	...props
}: SelectFieldProps) {
	const { control } = useFormContext();
	const {
		field,
		fieldState: { error },
	} = useController({ name, control, rules });

	return (
		<div className={cn("", wrapperClassName)}>
			{label && (
				<Label
					className="mb-2 block font-medium"
					htmlFor={name}
				>
					{label}
					{rules?.required && <span className="text-red-600">*</span>}
				</Label>
			)}
			<Select
				{...props}
				value={field.value}
				onValueChange={field.onChange}
			>
				<SelectTrigger
					className={cn("", triggerClassName)}
					id={name}
				>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{options.map((option) => (
						<SelectItem
							key={option.value}
							value={option.value}
						>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			{error && (
				<Error
					className={cn("", errorClassName)}
					message={error.message as string}
				/>
			)}
		</div>
	);
}

export default SelectField;
