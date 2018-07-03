import React from 'react';
import ProfilePicture from './../src/ProfilePicture';
import { Size } from '../src/Utils/StyleConfig';

const ProfilePictureStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Profile Picture</h1>
      <p><code>{`import { ProfilePicture } from 'glints-aries'`}</code></p>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <ProfilePicture size="medium" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
            </td>
            <td><code>{`<ProfilePicture size="medium" assetUrl="..."/>`}</code></td>
          </tr>
        </tbody>
      </table>

      <h1>Props</h1>
      <table className="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Value</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>string</td>
            <td><pre>{`large | medium | small`}</pre></td>
            <td>no</td>
            <td>Sets the size of picture.</td>
          </tr>
          <tr>
            <td>assetUrl</td>
            <td>string</td>
            <td>url / path</td>
            <td>yes</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProfilePictureStory;