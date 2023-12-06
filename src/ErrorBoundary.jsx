import React from "react";

// =============================
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.warn({ error, info });
    // logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      console.warn(this.state.error);
      const { stack = "" } = this.state?.error || {};
      return (
        <div>
          <pre>{this.state.error?.message || "Error - no message"}</pre>
          <pre>{JSON.stringify(stack.split("\n"), null, 1)}</pre>
        </div>
      );
    }
    console.clear();
    return this.props.children;
  }
}
