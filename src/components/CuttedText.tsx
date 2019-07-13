import * as React from 'react';

declare namespace CuttedTextComponent {
    export interface ICutterTextProps {
        text: string;
        type?: string;
        count?: number;
    }
}

export function CuttedText(props: CuttedTextComponent.ICutterTextProps) {
    const { text, type = CuttedText.word, count = 20 } = props;

    let glue = ' ';
    let separator: string | RegExp = ' ';
    
    switch(type) {
        case 'letter': {
            glue = separator = '';
            break;
        }
        case 'sentence': {
            glue = '.';
            separator = /([\.\?!][\'\"\u2018\u2019\u201c\u201d\)\]]*\s*(?<!\w\.\w.)(?<![A-Z][a-z][a-z]\.)(?<![A-Z][a-z]\.)(?<![A-Z]\.)\s+)/;
            break;
        }
        default: break;
    }

    return (
        <React.Fragment>
            {text.split(separator).splice(0, count).join(glue).concat('...')}
        </React.Fragment>
    );
}

CuttedText.word = 'word';
CuttedText.letter = 'letter';
CuttedText.sentence = 'sentence';
