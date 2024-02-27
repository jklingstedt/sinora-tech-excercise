import { FormDataProps } from '../App'

export interface FormOutputProps {
    formOutput: FormDataProps[]
}

export const FormOutput = ({ formOutput }: FormOutputProps) => {
    return (
        <pre className="form-output">
            {formOutput.length !== 0 ? JSON.stringify(formOutput, null, 4) : ''}
        </pre>
    )
}

export default FormOutput
