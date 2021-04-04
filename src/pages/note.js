import React from 'react';
import { useQuery } from '@apollo/client';

import Note from '../components/Note';

import { GET_NOTE } from '../gql/query';

const NotePage = props => {
  // extract the note id from the url
  const id = props.match.params.id;

  // query hook, passing the id as a variable
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;

  // if there is an error fetching the data, display an error message
  if (error) return <p>Error! Note not found</p>;

  // if the query is successful, display the data in our UI
  return <Note note={data.note} />;  
};

export default NotePage;