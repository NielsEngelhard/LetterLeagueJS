interface Props {
    errors: any;
}
export default function RootError({ errors }: Props) {
    return (
        <>
            {errors?.root && <p className="form-error">{errors.root.message}</p>}
        </>
    )
}