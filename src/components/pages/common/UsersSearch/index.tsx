import React, { FunctionComponent, useMemo, useState } from 'react';
import { Divider, Input } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../../app/page/profile/profile.actions';
import { userSelectors } from '../../../../app/resource/user/user.selectors';
import { useSelect } from '../../../../utils/selector.utils';
import { User } from '../User';
export const UsersSearch: FunctionComponent = () => {
  const dispatch = useDispatch();
  const users = useSelect(userSelectors.selectResourceList);
  const [username, setUsername] = useState('');
  const filteredUsers = useMemo(() => users.filter((user) => user.username.includes(username)), [username, users]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Input fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        {filteredUsers.map((user) => (
          <div key={`filteredUser-${user._id}`}>
            <User userId={user._id} />
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
};
