import { useState, useCallback } from 'react'
import './App.css'
import Form from './components/form'
import FormOutput from './components/form.output'

export interface FormDataProps {
    id: string
    value: string
}
;[]

export const App = () => {
    const [formData, setFormData] = useState<FormDataProps[] | undefined>()
    const formArray = [
        { id: 'examination', label: 'Examination' },
        { id: 'clinicalHistory', label: 'Clinical History' },
        { id: 'technique', label: 'Technique' },
        { id: 'findings', label: 'Findings' },
        { id: 'impressions', label: 'Impressions' },
    ]

    const handleFormSubmit = useCallback(
        (evt: React.FormEvent<HTMLFormElement>) => {
            evt.preventDefault()
            const formElement = evt.target as HTMLFormElement
            const textAreas = formElement
                ? formElement.querySelectorAll('textarea')
                : []
            const formObject = Array.from(textAreas).map(
                (item: HTMLTextAreaElement) => {
                    return {
                        id: item.id,
                        value: item.value,
                    }
                }
            )
            setFormData(formObject)
            const formOutputElement = document.querySelector(
                '.form-output'
            ) as HTMLElement | null
            setTimeout(() => {
                formOutputElement?.scrollIntoView({
                    behavior: 'smooth',
                })
            }, 250)
        },
        []
    )

    const handleEvent = useCallback(
        (evt: React.FormEvent<HTMLTextAreaElement>) => {
            const target = evt.target as Node
            const containerElement = target.parentElement
            const parentElement = containerElement?.parentElement
            if (!parentElement) return
            switch (evt.type) {
                case 'focus':
                    parentElement.classList.add('focused')
                    parentElement.classList.remove('touched')
                    break
                case 'blur':
                    parentElement.classList.add('touched')
                    parentElement.classList.remove('focused')
                    break
            }
        },
        []
    )

    return (
        <>
            <Form
                formArray={formArray}
                handleFormSubmit={handleFormSubmit}
                handleFocus={handleEvent}
                handleBlur={handleEvent}
            />
            <FormOutput formOutput={formData || []} />
        </>
    )
}
