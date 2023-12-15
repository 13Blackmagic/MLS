import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Add Property Listings"
              showTitle={false}

          }

            // States of the united states
            <div class = "container">
              <div class = "row">
                <div class = "col-12">
                  <h1>States of the United States</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h2>Alabama</h2>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h2>Alaska</h2>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h2>Arizona</h2>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h2>Arkansas</h2>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h2>California</h2>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h2>Colorado</h2>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h2>Connecticut</h2>
                </div>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h2>Delaware</h2>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h2>Florida</h2>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h2>Georgia</h2>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h2>Hawaii</h2>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h2>Idaho</h2>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h2>Illinois</h2>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h2>Indiana</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Iowa</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Kansas</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Kentucky</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Louisiana</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Maine</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Maryland</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Massachusetts</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Michigan</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Minnesota</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Mississippi</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h2>Missouri</h2>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>Montana</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>Nebraska</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>Nevada</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>New Hampshire</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>New Jersey</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>New Mexico</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>New York</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>North Carolina</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>North Dakota</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>Ohio</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>Oklahoma</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>Oregon</h1>
              </div>
            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>Pennsylvania</h1>
              </div>

            </div>
            < div class = "row">
              <div class = "col-12">
                <h1>Rhode Island</h1>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>South Carolina</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>South Dakota</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>Tennessee</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>Texas</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>Utah</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>Vermont</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>Virginia</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>Washington</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>West Virginia</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>Wisconsin</h1>
                </div>
              </div>
              <div class = "row">
                <div class = "col-12">
                  <h1>Wyoming</h1>
                </div>
              </div>
            </div>
            </div>
            </div>

        </div>
      </div>
    </main>
  );
};

export default Home;
