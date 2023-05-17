import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react'
import { AxiosError } from 'axios'

export type ErrorBoundaryProps = PropsWithChildren

type State = {
    hasError: boolean
    errorAxios?: AxiosError
    error?: Error
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Error caught by ErrorBoundary:', error, errorInfo)
    }

    componentDidMount(): void {
        const { errorAxios } = this.state

        if (errorAxios)
            this.setState({
                ...this.state,
                hasError: true,
                error: errorAxios,
            })
    }

    render(): ReactNode {
        const { hasError, error } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                <div>
                    <h1>Something went wrong!</h1>
                    <p>{error?.message}</p>
                </div>
            )
        }

        return children
    }
}
