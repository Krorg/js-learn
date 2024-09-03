import { Flex, FlexProps } from '../Flex/Flex';

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
    return <Flex direction="row" {...props} />;
};
