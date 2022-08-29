import * as React from 'react';
import { TextField, MenuItem, Box, FormControlLabel, Button, Checkbox } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CollectionList from '../collections/CollectionList';

//rtk api operations...corresponding with API calls to the backend
import { useCreateSourceCollectionAssociationMutation } from '../../app/services/sourcesCollectionsApi';

import { useGetCollectionQuery } from '../../app/services/collectionsApi';

import {
  useGetSourceQuery,
  useUpdateSourceMutation,
  useDeleteSourceMutation,
  usePostSourceMutation
}
  from '../../app/services/sourceApi';

export default function ModifySource() {

  const params = useParams();
  const sourceId = Number(params.sourceId);

  const handleChange = ({ target: { name, value } }) => setFormState((prev) => ({ ...prev, [name]: value }))


  // show data 
  const [isShown, setIsShown] = useState(false)

  // menu options
  const services = ["Online News", "Youtube"]

  // form state for text fields 
  const [formState, setFormState] = React.useState({
    id: "", name: "", notes: "", homepage: "", label: "", service: ""
  });

  // create 
  const [post, { setPost }] = usePostSourceMutation();

  // update 
  const [updateSource, updateSourceResult] = useUpdateSourceMutation();

  // delete 
  const [remove, { setRemove }] = useDeleteSourceMutation();

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSourceQuery(sourceId);

  useEffect(() => {
    if (data) {
      const formData = {
        id: data.id, name: data.name, notes: data.notes, homepage: data.homepage, label: data.label
      }
      setFormState(formData)
    }
  }, [data])

  //patch for now, this should be fixed by a collections search feature, could also consider a debounce or throttle
  const [collectionId, setCollectionId] = useState("");

  const collectionData = useGetCollectionQuery(collectionId)

  const [createSourceCollectionAssociation, associationResult] = useCreateSourceCollectionAssociationMutation();


  if (isLoading){
    return <h1>Loading...</h1>
  }
  else {
  return (
    <div className='modify-source-container'>
      <div className="collection-header">
        <h2 className="title">Modify this Source</h2>

        <ul>
          <h2>{data.id} - {data.label}</h2>

          {/* Name */}
          <li>
            <h5>Name</h5>
            <TextField
              fullWidth
              id="text"
              name="name"
              value={formState.name ? formState.name : "enter name"}
              onChange={handleChange}
            />
          </li>

          {/* Notes */}
          <li>
            <h5>Notes</h5>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              name="notes"
              multiline
              rows={4}
              value={formState.notes === null ? "" : formState.notes}
              onChange={handleChange}
            />
          </li>

          {/* Homepage */}
          <li>
            <h5>Homepage</h5>
            <TextField
              fullWidth
              id="text"
              name="homepage"
              value={formState.homepage}
              onChange={handleChange}
            />
          </li>

          {/* Label */}
          <li>
            <h5>Label</h5>
            <TextField
              fullWidth
              id="text"
              name="label"
              value={formState.label ? formState.label : "enter or edit label"}
              onChange={handleChange}
            />
          </li>

          <Button
            style={{ backgroundColor: "white" }}
            variant='contained'
            sx={{ my: 2.25, color: 'black', display: 'block' }}
            onClick={async () => {
              const updateCollection = await updateSource(formState).unwrap();
              setIsShown(!isShown)
            }}
          >
            Associations
          </Button>

          {/* <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={async () => {
              console.log(formState.id)
              const deleteCollection = await remove({
                id: formState.id
              }).unwrap()
              // deleted == null
              console.log(deleteCollection)
            }}
          >
            Delete
          </Button> */}

        </ul>
      </div>
      <div>
        <h3>Collections</h3>

        <label> Add Collection to Source (enter the collection ID):
          <input type="text" value={collectionId} onChange={e => setCollectionId(Number(e.target.value))} />
        </label>

        <button onClick={() => {
          const assoc = { 'source_id': sourceId, 'collection_id': collectionId } 
          const collection = collectionData.data; 
          createSourceCollectionAssociation(assoc)
          setCollectionId("")
        }}>Add Source</button>

        <CollectionList edit={true} sourceId={sourceId} />

      </div>
    </div >
  )};
}