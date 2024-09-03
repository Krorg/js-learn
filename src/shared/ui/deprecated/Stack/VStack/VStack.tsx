import { Flex, FlexProps } from '../Flex/Flex';

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;

    return <Flex direction="column" align={align} {...props} />;
};
