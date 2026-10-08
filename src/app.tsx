/*
 * SPDX-License-Identifier: LGPL-2.1-or-later
 *
 * Copyright (C) 2017 Red Hat, Inc.
 */

import React from 'react';
import { Page, PageSection } from '@patternfly/react-core/dist/esm/components/Page/index.js';
import { Bullseye } from '@patternfly/react-core/dist/esm/layouts/Bullseye/index.js';

import cockpit from 'cockpit';

const _ = cockpit.gettext;

export const Application = () => {
    return (
        <Page className='pf-m-no-sidebar'>
            <PageSection hasBodyWrapper={false}>
                <Bullseye>
                    <h2>{_("Manage your system with Ansible and System Roles")}</h2>
                </Bullseye>
            </PageSection>
            <PageSection hasBodyWrapper={false} isFilled>
                <Bullseye>
                    {_("Main")}
                </Bullseye>
            </PageSection>
            <PageSection hasBodyWrapper={false}>
                <Bullseye>
                    {_("Footer")}
                </Bullseye>
            </PageSection>
        </Page>
    );
};
