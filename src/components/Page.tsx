import { Layout } from 'antd';
import * as React from 'react';
import { useFela } from 'react-fela';
import { IStyle } from 'fela';

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
        <Layout>
            <Header>
                <h1 className={css(Page.style.title)}>{title}</h1>
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
    footer: { textAlign: 'center' } as IStyle,
    title: { margin: 0, color: '#fff' } as IStyle,
    content: { background: '#fff', padding: '16px 0' } as IStyle,
};
