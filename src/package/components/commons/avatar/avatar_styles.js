import { flex } from '../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = ({ palette }) => ({
    container: {
        height: 110,
        width: 110,
        borderRadius: '50%',
        backgroundColor: palette.dark[50],
        overflow: 'hidden',
        ...center
    },
    image: {
        height: 'calc(100% + 2px)',
        width: 'calc(100% + 2px)',
        objectFit: 'cover'
    }
});