<div class="contact-main-details-container">
    <div class="contact-detail-name">{{contactName}}</div>
    <div class="contact-detail-email">{{contactEmail}}</div>
    <div class="contact-detail-number">{{contactNumber}}</div>
</div>
<div class="contact-type-container">
    {{#if isFavorite}}
        <div class="contact-detail-favorite-container">
            <span class="glyphicon glyphicon-ok"></span>
            <span class="contact-detail-type-text">Favorite</span>
        </div>
    {{/if}}
    {{#if isFamily}}
        <div class="contact-detail-family-container">
            <span class="glyphicon glyphicon-star"></span>
            <span class="contact-detail-type-text">Family</span>
        </div>
    {{/if}}
</div>
<div class="contact-detail-btn-container">
    <div class="edit-contact-detail-btn btn contact-detail-btn">{{editContactBtnText}}</div>
    <div class="delete-contact-detail-btn btn contact-detail-btn">{{deleteBtnText}}</div>
</div>