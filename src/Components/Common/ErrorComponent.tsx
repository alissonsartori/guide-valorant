import React from 'react';
import {
    Box,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button,
} from '@chakra-ui/react';

interface ErrorComponentProps {
    message: string;
    onRetry?: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
    message,
    onRetry,
}) => {
    return (
        <Box maxWidth="500px" margin="auto" padding={4}>
            <Alert status="error" borderRadius="md">
                <AlertIcon />
                <Box>
                    <AlertTitle>Erro!</AlertTitle>
                    <AlertDescription display="block">{message}</AlertDescription>
                    {onRetry && (
                        <Button colorScheme="red" size="sm" mt={2} onClick={onRetry}>
                            Tentar Novamente
                        </Button>
                    )}
                </Box>
            </Alert>
        </Box>
    );
};

export default ErrorComponent;
