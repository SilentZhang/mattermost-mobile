// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';

import {observeCurrentChannel} from '@queries/servers/channel';

import AddPeopleBox from './add_people_box';

import type {WithDatabaseArgs} from '@typings/database/database';

const enhanced = withObservables([], ({database}: WithDatabaseArgs) => {
    return {
        currentChannel: observeCurrentChannel(database),
    };
});

export default withDatabase(enhanced(AddPeopleBox));
