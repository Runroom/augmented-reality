import { theme } from '../config';
import { hover } from './helpers';
import { modular, space } from './rhythm';

const typography = `
    .title1,
    .title2 {
        font-weight: 200;
    }

    .title1 {
        font-size: ${modular(7)};
        line-height: ${space(1.7)};
        margin-bottom: ${space()};
    }

    .title2 {
        font-size: ${modular(5)};
        line-height: ${space(1.25)};
        margin-bottom: ${space()};
    }

    .p-big {
        font-weight: 500;
        font-size: ${modular(3)};
        line-height: ${space(1.2)};
    }

    .p-small {
        font-size: ${modular(-1)};
        line-height: ${space(.75)};
    }

    a {
        color: ${theme.colors.neutro900};
        cursor: pointer;
        text-decoration: underline;

        ${hover`
            text-decoration: none;
        `}
    }
`;

export default typography;
