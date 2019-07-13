import * as React from 'react';
import { Result } from 'antd';
import { Page } from '../components/Page';

export function NotFound() {
    return (
        <Page title="Favorite beer">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
            />
        </Page> 
    );
}
