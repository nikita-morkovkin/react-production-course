import {Component, ErrorInfo, ReactNode, Suspense} from "react";
import {PageError} from "widgets/PageError";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;

    if (hasError) {
      return <Suspense fallback={<div>Loading...</div>}>
        <PageError />
      </Suspense>
    }

    return children;
  }
}

export default ErrorBoundary;