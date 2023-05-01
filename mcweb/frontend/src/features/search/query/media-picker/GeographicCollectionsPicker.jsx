import * as React from 'react';
import PropTypes from 'prop-types';
import { addPreviewSelectedMedia, removePreviewSelectedMedia } from '../querySlice';
import { useGetGlobalCollectionsQuery } from '../../../../app/services/collectionsApi';
import MediaPickerSelectionTable from './MediaPickerSelectionTable';

export default function GeographicCollectionsPicker({ platform, queryIndex }) {
  const { data, isLoading } = useGetGlobalCollectionsQuery({ platform });

  if (isLoading) {
    return (<div>Loading...</div>);
  }

  const formatedData = data.countries.map((countryAndCollections) => countryAndCollections.collections.map((collection) => ({
    id: collection.tags_id,
    name: collection.label,
    notes: collection.description,
    source_count: collection.length,
  }))).flat();

  return (
    <div className="container">
      <MediaPickerSelectionTable
        selected={[]}
        matching={formatedData}
        onAdd={addPreviewSelectedMedia}
        onRemove={removePreviewSelectedMedia}
        collection
        queryIndex={queryIndex}
        isGlobalCollection
      />
    </div>
  );
}

GeographicCollectionsPicker.propTypes = {
  platform: PropTypes.string.isRequired,
  queryIndex: PropTypes.number.isRequired,
};
