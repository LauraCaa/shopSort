import React, { useState } from 'react';

export default function EditButton(props){

      const [isEditing, setIsEditing] = useState(false);
      const [editedProduct, setEditedProduct] = useState(props.product);
    
      function handleEditClick() {
        setIsEditing(!isEditing);
        if (!isEditing) {
          props.onEdit(props.product);
        }
      }
    
      function saveChanges() {
        props.onEdit(editedProduct);
        setIsEditing(false);
      }
    
      return (
        <div>
          {isEditing ? (
            <>
              <button onClick={saveChanges}>Save</button>
            </>
          ) : (
            <button className='btn btn-lg btn-secondary-subtle fw-bolder' onClick={handleEditClick}>Edit</button>
          )}
        </div>
      );
    }    
