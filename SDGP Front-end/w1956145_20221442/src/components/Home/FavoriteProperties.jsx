import React from 'react';

const FavoriteProperties = ({ favorites, onPropertyClick, handleDragRemove, toggleModal, handleRemoveFavorite, handleClearFavorites }) => {

    if (!favorites || favorites.length === 0) {

        return (
            <div className="row min-vh-100"  >
                <div className="col-12">
                    <h2>Favorites</h2>
                    <div className="alert alert-info mt-4" role="alert">
                        No favorite properties found.
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="row min-vh-100" >
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <h2>Favorites</h2>
                    <div className="button-delete" onClick={handleClearFavorites}>Clear All <i className="fa fa-trash" aria-hidden="true"></i></div>

                </div>
                <div className="row mt-3">
                    {favorites.map(property => (
                        <div key={property.id} className="col-sm-6 col-md-12 mb-4" >
                            <div
                                className="card shadow-sm max-h-100"
                                draggable
                                onDragStart={() => handleDragRemove(property)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={property.picture[0]}
                                    alt={property.picture[0]}
                                    className="card-img-top"
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    onClick={() => { onPropertyClick(property); toggleModal(); }}
                                />
                                <div className="card-body" onClick={() => { onPropertyClick(property); toggleModal(); }}>
                                    <h3 className="card-title">{property.type}</h3>
                                    <div style={{ height: '70px', overflow: 'hidden' }}>
                                        <div dangerouslySetInnerHTML={{ __html: property.description.substring(0, 100) ? property.description.substring(0, 100) + '...' : '' }} />
                                    </div>
                                    <p className="card-text mt-3">Price: Rs. {property.price} /=</p>
                                    <p className="card-text">Date Added: {property.added.day}<sup>th</sup> {property.added.month} {property.added.year}</p>
                                </div>
                                {/* Remove from Favorites button */}
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleRemoveFavorite(property)}
                                >
                                    Remove from Favorites
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavoriteProperties;
