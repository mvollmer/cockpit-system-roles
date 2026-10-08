/*
 * SPDX-License-Identifier: LGPL-2.1-or-later
 *
 * Copyright (C) 2026 Red Hat, Inc.
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import cockpit from "cockpit";

import "cockpit-dark-theme";

import { Application } from './app.jsx';

import "patternfly/patternfly-6-cockpit.scss";
import './app.scss';

document.addEventListener("DOMContentLoaded", () => {
    cockpit.transport.wait(() => {
        createRoot(document.getElementById("app")!).render(<Application />);
    });
});
