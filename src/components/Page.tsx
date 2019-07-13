import { Layout } from 'antd';
import * as React from 'react';
import { useFela } from 'react-fela';
import { IStyle } from 'fela';
import { Link } from 'react-router-dom';

const { Content, Header, Footer } = Layout;

declare namespace IPageComponent {
    export interface IPageProps {
        title: string;
        children?: any;
    }
}

export function Page(props: IPageComponent.IPageProps) {
    const { css } = useFela(props);
    const { title, children } = props;

    return (
        <Layout className={css(Page.style.layout)}>
            <Header>
                <h1 className={css(Page.style.title)}>
                    <Link to="/">{title}</Link>
                </h1>
            </Header>
            <Content className={css(Page.style.content)}>
                {children}
            </Content>
            <Footer className={css(Page.style.footer)}>
                2019
            </Footer>
        </Layout>
    )
}

Page.style = {
    layout: { minHeight: '100vh' } as IStyle,
    footer: { textAlign: 'center' } as IStyle,
    title: { 
        margin: 0,
        '& a': {
            color: '#fff',
        },
    } as IStyle,
    content: { 
        // overflowY: 'auto',
        minHeight: 'calc(100vh - 133px)',
        background: '#fff', padding: '16px 0',
    } as IStyle,
};
