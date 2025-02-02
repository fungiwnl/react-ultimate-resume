import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CopyWrapper } from '../../commons/copy_wrapper/copy_wrapper';
import { ReactComponent as GitHubIcon } from '../../../assets/icons/brands/github.svg';
import { ReactComponent as GitBookIcon } from '../../../assets/icons/brands/gitbook.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';

export const SHARE_LINKS_DATA = Object.freeze({
    gitHub: {
        icon: GitHubIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="My {platform}"
                values={{ platform: 'GitHub' }}
            />
        ),
        getLink: ({ gitHubLink }) => `https://github.com/${gitHubLink}`
    },
    gitBook: {
        icon: GitBookIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="My {platform}"
                values={{ platform: 'Gitbook' }}
            />
        ),
        getLink: () => {
            return `https://wiki.b-fung.com/`;
        }
    },
    linkedIn: {
        icon: LinkedInIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="My {platform}"
                values={{ platform: 'LinkedIn' }}
            />
        ),
        getLink: ({ gitHubLink }) => `https://linkedin.com/in/${gitHubLink}`
    },
    copyShareUrl: {
        icon: (props) => (
            <CopyWrapper value={(typeof window === 'undefined' ? {} : window).location?.href}>
                <ShareIcon {...props} />
            </CopyWrapper>
        ),
        tooltipTranslation: <FormattedMessage id="Footer.shareLinks.copyUrl" defaultMessage="Copy profile's URL" />
    }
});
