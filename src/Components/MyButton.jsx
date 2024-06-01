import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function MyButton({ to, children, size }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 500);
    };

    return (
        <Link to={to}>
            <Button
                aria-label={`Navigate to ${children}`}
                bg={isClicked ? '#495E57' : '#F4CE14'}
                borderRadius='16px'
                _hover={{ bg: '#ffea82' }}
                onClick={handleClick}
                size={size}
            >
                {children}
            </Button>
        </Link >
    );
}

export default MyButton;

