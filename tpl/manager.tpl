<div class="contact-header-container">
    <div class="contact-header">
        <div class="contact-header-text-container">
            <span class="contact-header-text">{{mainHeaderText}}</span>
            <span class="contact-counter-holder"></span>
        </div>
        <div class="contact-type-btn-container">
            <div class="show-all-contacts-btn btn btn-default contact-type-btn selected" data-contact-type="all">
                <span>{{{showAllContactsBtnText}}}</span>
            </div>
            <div class="show-favorite-contacts-btn btn btn-default contact-type-btn" data-contact-type="favorite">
                <span>{{{showFavoriteBtnText}}}</span>
            </div>
            <div class="show-family-contacts-btn btn btn-default contact-type-btn" data-contact-type="family">
                <span>{{{showFamilyBtnText}}}</span>
            </div>
        </div>
    </div>
    <div class="no-contact-description-text-container">
        <div class="no-contact-header-text">{{descriptionHeaderText}}</div>
        <p>{{descriptionText}}</p>
        <div class="add-contact-btn btn btn-primary">
            <span>{{{addContactBtnText}}}</span>
        </div>
    </div>
    <div class="contact-notification-container"></div>
    <div class="contact-table-container">
        <div class="contact-table-header-container"></div>
        <div class="contact-table-content-container"></div>
        <div class="contact-table-footer-container">
            <div class="dummy-select-footer-container"></div>
                <div class="table-footer-btn-container">
                <div class="delete-selected-contact-btn btn btn-default disabled">
                    <span>{{{deleteSelectedBtnText}}}</span>
                </div>
                <div class="delete-all-contacts-btn btn btn-default">
                    <span>{{{deleteAllBtnText}}}</span>
                </div>
                <div class="add-contact-btn btn btn-primary">
                    <span>{{{addContactBtnText}}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="add-contact-container"></div>
<div id="contact-details-container" class="contact-details-container">
    <div class="contact-details-header">{{contactDetailsHeaderText}}</div>
    <div class="contact-details-holder"></div>
</div>