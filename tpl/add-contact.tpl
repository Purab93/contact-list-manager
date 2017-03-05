<div class="add-new-contact-holder">
    <div class="add-new-contact-header-container">
        <div class="header-text">{{addContactHeaderText}}</div>
        <div>{{addContactHeaderDescription}}</div>
    </div>
    <div class="error-messages-container">
        <div class="error-close-btn btn"><span class="glyphicon glyphicon-remove"></span></div>
        <div class="error-message-header">{{errorMessageHeader}}</div>
        <ul class="error-message-holder"></ul>
    </div>
    <div class="contact-info-fields-container">
        <div class="first-name-field-holder field-holder">
              <div class="field-holder-text">First name</div>
              <input type="text" class="contact-first-name" name="contact-first-name" placeholder="Name">
        </div>
        <div class="last-name-field-holder field-holder">
              <div class="field-holder-text">Last name</div>
              <input type="text" class="contact-last-name" name="contact-last-name" placeholder="Surname">
        </div>
        <div class="mobile-field-holder field-holder">
              <div class="field-holder-text">Mobile</div>
              <input type="number" class="contact-mobile" name="contact-mobile" placeholder="Mobile" min="0">
        </div>
        <div class="email-field-holder field-holder">
              <div class="field-holder-text">Email</div>
              <input type="email" class="contact-email" name="contact-email" placeholder="Email">
        </div>
        <div class="contact-type-field-holder">
            <div class="contact-type-checkbox">
                <label><input type="checkbox" class="contact-type-favourite"><span class="contact-type-text">Favourite</span></label>
            </div>
            <div class="contact-type-checkbox">
                <label><input type="checkbox" class="contact-type-family"><span class="contact-type-text">Family</span></label>
            </div>
        </div>
    </div>
    <div class="add-contact-btn-container">
        <div class="add-contact-info-btn btn btn-primary add-edit-btn">{{addContactBtnText}}</div>
        <div class="reset-btn btn add-edit-btn">{{resetBtnText}}</div>
    </div>
    <div class="edit-contact-btn-container">
        <div class="edit-contact-info-btn btn btn-primary add-edit-btn">{{editContactBtnText}}</div>
        <div class="delete-contact-info-btn btn btn-danger add-edit-btn">{{deleteBtnText}}</div>
    </div>
</div>