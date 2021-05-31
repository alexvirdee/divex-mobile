import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, param) {
    navigationRef.current && navigationRef.current.navigate(name, params);
}