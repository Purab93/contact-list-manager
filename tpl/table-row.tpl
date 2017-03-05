<div class="select-contact-container contact-table-cell">
    <input type="checkbox" class="select-contact-input">
</div>
<div class="contact-name-container contact-table-cell">
    <a href="#contact-details-container"><span class="contact-name-text table-cell-text">{{contactName}}</span></a>
</div>
<div class="contact-mobile-container contact-table-cell">
    <span class="contact-mobile-text table-cell-text">{{contactMobile}}</span>
</div>
<div class="contact-email-container contact-table-cell">
    <span class="contact-email-text table-cell-text">{{contactEmail}}</span>
</div>
<div class="contact-favorite-container contact-table-cell">
    <span class="contact-favorite-text table-cell-text">{{contactFavorite}}</span>
</div>
<div class="contact-family-container contact-table-cell">
    <span class="contact-family-text table-cell-text">{{contactFamily}}</span>
</div>
<div class="contact-edit-container contact-table-cell">
    {{#if isRow}}
        <span class="contact-edit-text table-cell-text">Edit</span>
    {{/if}}
</div>
<div class="contact-delete-container contact-table-cell">
    {{#if isRow}}
        <span class="contact-delete-text table-cell-text">Delete</span>
    {{/if}}
</div>
