import styled from 'styled-components'

export interface FormProps {
    formArray: Array<{
        id: string
        label: string
    }>
    handleFormSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
    handleFocus: (evt: React.FocusEvent<HTMLTextAreaElement>) => void
    handleBlur: (evt: React.FocusEvent<HTMLTextAreaElement>) => void
}

const StyledForm = styled.form`
    --bg: #041520;
    --light-blue: #318bfe;
    --text-gray: #828a8f;
    --light-text: #fff;
    --input-bg: #0c1c27;
    --input-color: #d3d3d3;
    --input-border: #202f39;

    display: flex;
    flex-direction: column;

    .form-group {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-gray);
        vertical-align: text-top;

        &:before {
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
            margin-bottom: -0.25rem;
            content: '';
            display: inline-block;
            border: solid 1px var(--text-gray);
            border-radius: 50%;
        }
    }

    .textarea-container {
        display: flex;
        border-left: 1px solid var(--input-border);
        padding: 0 0.75rem 0;
        margin-left: 0.5rem;
    }

    & .touched .textarea-container {
        border-color: var(--light-blue);
    }

    textarea {
        font-family: inherit;
        background-color: var(--input-bg);
        border: 1px solid var(--input-border);
        border-radius: 0.25rem;
        color: var(--input-color);
        font-size: 1rem;
        padding: 0.5rem;
        margin-top: 0.25rem;
        width: 100%;
    }

    & .focused label {
        color: var(--light-text);
    }

    & .focused label:before {
        border-color: var(--light-text);
    }

    & .touched label:before {
        background-color: var(--light-blue);
        content: '✓';
        color: white;
        font-size: 0.75rem;
        text-align: center;
        border-color: var(--light-blue);
    }

    button {
        align-self: flex-end;
        background-color: var(--light-blue);
        border: none;
        border-radius: 1.25rem;
        color: white;
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }
`

export const Form = ({
    formArray,
    handleFormSubmit,
    handleFocus,
    handleBlur,
}: FormProps) => {
    return (
        <StyledForm onSubmit={handleFormSubmit}>
            {formArray.map((item) => {
                return (
                    <div key={item.id} className="form-group">
                        <label htmlFor={item.id}>{item.label}</label>
                        <span className="textarea-container">
                            <textarea
                                id={item.id}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            ></textarea>
                        </span>
                    </div>
                )
            })}
            <button type="submit">Submit</button>
        </StyledForm>
    )
}

export default Form
