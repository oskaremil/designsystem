import React from 'react';
import InfoSirkelIkon from '@sb1/ffe-icons-react/lib/info-sirkel-ikon';

import SystemMessage from './SystemMessage';

export default function SystemNewsMessage(props) {
    return (
        <SystemMessage
            modifier="news"
            icon={<InfoSirkelIkon />}
            {...props}
        />
    );
}
