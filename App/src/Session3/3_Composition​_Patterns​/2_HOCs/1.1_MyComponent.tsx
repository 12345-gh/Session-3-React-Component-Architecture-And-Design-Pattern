/*
  In the functional programming we have a concept of higher-order functions (HOFs). 
HOFs are functions that accept another function as an argument, enhance its behavior, 
and return a new function. Applying the idea of HOFs to components results in higher-order 
components (HOCs).

const HoC = Component => EnhancedComponent

- Reusability: HOCs allow you to encapsulate shared functionalities and apply them to multiple components, promoting code reuse.
- Separation of Concerns: HOCs help maintain separate responsibilities, enabling your components to focus on their specific tasks.
- Code Abstraction: HOCs abstract common logic from components, making them more concise and easier to understand.
- Composability: You can combine various HOCs to compose complex functionalities into your components.
*/

import { FC } from 'react';
import withInnerWidth from './1.2_WithInnerWidth';

interface Props {
  innerWidth: number;
}

const MyComponent: FC<Props> = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>;

const EnhancedMyComponent = withInnerWidth(MyComponent);

export default EnhancedMyComponent;