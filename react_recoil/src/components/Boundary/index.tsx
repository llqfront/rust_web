import { Component, ReactElement, PropsWithChildren } from 'react'

// 错误时降级显示的UI组件，props就传个error就可以了，返回就是我们的jsx
type FallbackRender = (props: { error: Error | null }) => ReactElement

export default class ErrorBoundary extends Component<PropsWithChildren<{ fallbackRender: FallbackRender }>, { error: Error | null }> {
    state = {
        error: null, // 默认值 没有错误
    }

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    render() {
        const { error } = this.state
        const { children, fallbackRender } = this.props
        return error ? fallbackRender({ error }) : children
    }
}



/*
import ErrorBoundary from '@/Boundary';

const ErrorInfo = ({ error }: { error: Error | null }) => (
  <div>
    {error?.message}
  </div>
)
<ErrorBoundary fallbackRender={ErrorInfo}>

      </ErrorBoundary>

**/
