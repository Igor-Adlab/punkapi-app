import * as React from 'react';
import { Result, Button } from 'antd';

declare namespace ErrorComponent {
    export interface IErrorProps {
        message?: string;
        retry?: () => void;
        error: string | Error;
    }
}

export function ErrorView(props: ErrorComponent.IErrorProps) {
    const { error, retry } = props;
    return (
        <Result
            title="500"
            status="500"
            subTitle="Sorry, the server is wrong."
            extra={retry ? <Button onClick={retry} type="primary">Retry</Button> : null}
        />
    );
}
