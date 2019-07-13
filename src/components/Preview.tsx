import { IStyle } from 'fela';
import * as React from 'react';
import { useFela } from 'react-fela';

declare namespace PreviewComponent {
    export interface IPreviewProps {
        image: string;
        color?: string;
        className?: string;
        width?: string | number;
        height?: string | number;
        children?: React.ReactElement | React.ReactElement[] | null;
    }
}

export function Preview(props: PreviewComponent.IPreviewProps) {
    const { css } = useFela(props);
    const { children, className = '' } = props;

    return (
        <div className={`${className} ${css({}, Preview.styles.preview)}`}>
            {children}
        </div>
    );
}

Preview.styles = {
    preview: ({ image, color, width = '100%', height = '100%' }: any): IStyle => ({
        width, height,
        background: !image ? color
        : `url(${image}) 100% 100% no-repeat`,
    }),
}
