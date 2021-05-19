import React, { Component } from "react"

export default class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error) {
    // log error
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}
