const {
  LeadValidator,
  CommunicationValidator,
  PaymentValidator,
  CatalogValidator,
  CompanyProfileValidator,
  FileStorageValidator,
  InventoryValidator,
  ConfigurationValidator,
  MarketplacesValidator,
  AnalyticsValidator,
  DiscountValidator,
  WebhookValidator,
} = require("./PlatformModels");
const PlatformApplicationClient = require("./PlatformApplicationClient");
const Paginator = require("../common/Paginator");
const PlatformAPIClient = require("./PlatformAPIClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.lead = new Lead(config);
    this.communication = new Communication(config);
    this.payment = new Payment(config);
    this.catalog = new Catalog(config);
    this.companyProfile = new CompanyProfile(config);
    this.fileStorage = new FileStorage(config);
    this.inventory = new Inventory(config);
    this.configuration = new Configuration(config);
    this.marketplaces = new Marketplaces(config);
    this.analytics = new Analytics(config);
    this.discount = new Discount(config);
    this.webhook = new Webhook(config);
  }
  application(applicationId) {
    return new PlatformApplicationClient(applicationId, this.config);
  }
}

/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Page
        
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { boolean } [has_previous]
        
        @property { boolean } [has_next]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } [size]
        
         
    */

/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [header_image]
        
        @property { string } priority
        
        @property { boolean } [should_notify]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */

/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } priority
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { boolean } [login_required]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */

/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [sub_category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assigned_to]
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef AgentChangePayload
        
        
        @property { string } agent_id
        
         
    */

/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } unique_name
        
         
    */

/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } unique_name
        
        @property { Array<Object> } [notify]
        
         
    */

/**
        @typedef Filter
        
        
        @property { Array<Priority> } priorities
        
        @property { Array<TicketCategory> } [categories]
        
        @property { Array<Status> } statuses
        
        @property { Array<Object> } assignees
        
         
    */

/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */

/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */

/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { Object } value
        
         
    */

/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } access_token
        
         
    */

/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */

/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */

/**
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [country_code]
        
         
    */

/**
        @typedef Email
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */

/**
        @typedef TicketContext
        
        
        @property { string } [application_id]
        
        @property { string } company_id
        
         
    */

/**
        @typedef CreatedOn
        
        
        @property { string } user_agent
        
         
    */

/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */

/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */

/**
        @typedef AddTicketPayload
        
        
        @property { Object } [created_by]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */

/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef TicketCategory
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
        @property { Array<TicketSubCategory> } [sub_categories]
        
         
    */

/**
        @typedef TicketSubCategory
        
        
        @property { string } key
        
        @property { string } display
        
         
    */

/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } title_color
        
        @property { string } background_color
        
         
    */

/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } success_message
        
        @property { string } failure_message
        
         
    */

/**
        @typedef CustomForm
        
        
        @property { string } application_id
        
        @property { string } slug
        
        @property { string } [header_image]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Priority } priority
        
        @property { boolean } login_required
        
        @property { boolean } should_notify
        
        @property { string } [success_message]
        
        @property { SubmitButton } [submit_button]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { PollForAssignment } [poll_for_assignment]
        
        @property { string } _id
        
         
    */

/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticket_id
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { string } _id
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [created_on]
        
        @property { string } [response_id]
        
        @property { TicketContent } [content]
        
        @property { string } ticket_id
        
        @property { TicketCategory } category
        
        @property { TicketSubCategory } [sub_category]
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [created_by]
        
        @property { Object } [assigned_to]
        
        @property { Array<string> } [tags]
        
        @property { Object } [_custom_json]
        
        @property { string } _id
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef Activity
        
        
        @property { Object } [current_state]
        
        @property { string } [document_id]
        
        @property { Object } [previous_state]
        
         
    */

/**
        @typedef ActivityDump
        
        
        @property { Activity } [activity]
        
        @property { CreatedBy } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AddMediaListRequest
        
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { Array<AddMediaRequest> } [media_list]
        
        @property { string } [ref_id]
        
        @property { string } [ref_type]
        
         
    */

/**
        @typedef AddMediaRequest
        
        
        @property { string } [cloud_id]
        
        @property { string } [cloud_name]
        
        @property { string } [cloud_provider]
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { string } [media_url]
        
        @property { string } [ref_id]
        
        @property { string } [ref_type]
        
        @property { Array<string> } [tags]
        
        @property { string } [thumbnail_url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApproveRequest
        
        
        @property { boolean } [approve]
        
        @property { string } [entity_type]
        
        @property { string } id
        
        @property { string } [reason]
        
         
    */

/**
        @typedef Attribute
        
        
        @property { DateMeta } [date_meta]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<TagMeta> } [tags]
        
         
    */

/**
        @typedef AttributeObject
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } type
        
        @property { number } value
        
         
    */

/**
        @typedef CreatedBy
        
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Array<TagMeta> } [tags]
        
         
    */

/**
        @typedef CursorGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef DateMeta
        
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef DeviceMeta
        
        
        @property { string } [app_version]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef Entity
        
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */

/**
        @typedef EntityRequest
        
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
         
    */

/**
        @typedef FeedbackAttributes
        
        
        @property { Array<Attribute> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef FeedbackError
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { number } [status]
        
         
    */

/**
        @typedef FeedbackState
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
        @property { string } [media]
        
        @property { boolean } [qna]
        
        @property { boolean } [rating]
        
        @property { boolean } [review]
        
         
    */

/**
        @typedef GetResponse
        
        
        @property { Object } [data]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef GetReviewResponse
        
        
        @property { Array<ReviewFacet> } [facets]
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
        @property { Array<SortMethod> } [sort]
        
         
    */

/**
        @typedef InsertResponse
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef MediaMeta
        
        
        @property { number } [max_count]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */

/**
        @typedef MediaMetaRequest
        
        
        @property { number } max_count
        
        @property { number } size
        
         
    */

/**
        @typedef NumberGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PageCursor
        
        
        @property { number } [current]
        
        @property { boolean } [has_next]
        
        @property { boolean } [has_previous]
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { number } size
        
        @property { string } type
        
         
    */

/**
        @typedef PageNumber
        
        
        @property { number } [current]
        
        @property { boolean } [has_next]
        
        @property { number } [item_total]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Rating
        
        
        @property { Array<Attribute> } [attributes]
        
        @property { Array<string> } [attributes_slugs]
        
        @property { UI } [ui]
        
         
    */

/**
        @typedef RatingRequest
        
        
        @property { Array<string> } attributes
        
        @property { UI } [ui]
        
         
    */

/**
        @typedef ReportAbuseRequest
        
        
        @property { string } [description]
        
        @property { string } entity_id
        
        @property { string } entity_type
        
         
    */

/**
        @typedef Review
        
        
        @property { string } [description]
        
        @property { string } [header]
        
        @property { MediaMeta } [image_meta]
        
        @property { string } [title]
        
        @property { MediaMeta } [video_meta]
        
        @property { boolean } [vote_allowed]
        
         
    */

/**
        @typedef ReviewFacet
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [slug]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ReviewRequest
        
        
        @property { string } description
        
        @property { string } header
        
        @property { MediaMetaRequest } image_meta
        
        @property { boolean } is_vote_allowed
        
        @property { string } title
        
        @property { MediaMetaRequest } video_meta
        
         
    */

/**
        @typedef SaveAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } slug
        
         
    */

/**
        @typedef SortMethod
        
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [type]
        
         
    */

/**
        @typedef TagMeta
        
        
        @property { Array<MediaMeta> } [media]
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Template
        
        
        @property { DateMeta } [date_meta]
        
        @property { Entity } [entity]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Rating } [rating]
        
        @property { Review } [review]
        
        @property { FeedbackState } [state]
        
        @property { Array<TagMeta> } [tags]
        
         
    */

/**
        @typedef TemplateGetResponse
        
        
        @property { Array<Template> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef TemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enable_media_type]
        
        @property { boolean } [enable_qna]
        
        @property { boolean } enable_rating
        
        @property { boolean } enable_review
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */

/**
        @typedef TemplateRequestList
        
        
        @property { Array<TemplateRequest> } template_list
        
         
    */

/**
        @typedef UI
        
        
        @property { Array<string> } [feedback_question]
        
        @property { UIIcon } [icon]
        
        @property { Array<string> } [text]
        
        @property { string } [type]
        
         
    */

/**
        @typedef UIIcon
        
        
        @property { string } [active]
        
        @property { string } [inactive]
        
        @property { Array<string> } [selected]
        
         
    */

/**
        @typedef UpdateAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
         
    */

/**
        @typedef UpdateResponse
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef UpdateReviewRequest
        
        
        @property { boolean } [active]
        
        @property { string } [application]
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { Array<AttributeObject> } [attributes_rating]
        
        @property { string } [description]
        
        @property { DeviceMeta } [device_meta]
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { Array<MediaMeta> } [media_resource]
        
        @property { number } [rating]
        
        @property { string } [review_id]
        
        @property { string } [template_id]
        
        @property { string } [title]
        
         
    */

/**
        @typedef UpdateTemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enable_media_type]
        
        @property { boolean } [enable_qna]
        
        @property { boolean } enable_rating
        
        @property { boolean } enable_review
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */

/**
        @typedef UpdateTemplateStatusRequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
         
    */

/**
        @typedef AvailablePageSchema
        
        
        @property { string } [value]
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { Array<AvailablePageSchemaSections> } [sections]
        
        @property { Array<AvailablePageSectionMetaAttributes> } [sections_meta]
        
        @property { string } [theme]
        
        @property { AvailablePageSeo } [seo]
        
        @property { Array<Object> } [props]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef AvailablePageSectionMetaAttributes
        
        
        @property { Object } [attributes]
        
         
    */

/**
        @typedef AvailablePageSeo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef AvailablePageSchemaSections
        
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
        @property { Array<Object> } [blocks]
        
        @property { Object } [preset]
        
        @property { AvailablePagePredicate } [predicate]
        
         
    */

/**
        @typedef AvailablePageScreenPredicate
        
        
        @property { boolean } [mobile]
        
        @property { boolean } [desktop]
        
        @property { boolean } [tablet]
        
         
    */

/**
        @typedef AvailablePageUserPredicate
        
        
        @property { boolean } [authenticated]
        
        @property { boolean } [anonymous]
        
         
    */

/**
        @typedef AvailablePageRoutePredicate
        
        
        @property { string } [selected]
        
        @property { string } [exact_url]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef AvailablePagePredicate
        
        
        @property { AvailablePageScreenPredicate } [screen]
        
        @property { AvailablePageUserPredicate } [user]
        
        @property { AvailablePageRoutePredicate } [route]
        
         
    */

/**
        @typedef AllAvailablePageSchema
        
        
        @property { Array<AvailablePageSchema> } [pages]
        
         
    */

/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */

/**
        @typedef ThemesListingResponseSchema
        
        
        @property { Array<ThemesSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef AddThemeRequestSchema
        
        
        @property { string } [theme_id]
        
         
    */

/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parent_theme]
        
        @property { string } [applied_theme]
        
        @property { boolean } [upgrade]
        
         
    */

/**
        @typedef FontsSchema
        
        
        @property { FontsSchemaItems } [items]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef BlitzkriegApiErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BlitzkriegNotFoundSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BlitzkriegInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef FontsSchemaItems
        
        
        @property { string } [family]
        
        @property { Array<string> } [variants]
        
        @property { Array<string> } [subsets]
        
        @property { string } [version]
        
        @property { string } [last_modified]
        
        @property { FontsSchemaItemsFiles } [files]
        
        @property { string } [category]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef FontsSchemaItemsFiles
        
        
        @property { string } [regular]
        
        @property { string } [italic]
        
        @property { string } [bold]
        
         
    */

/**
        @typedef ThemesSchema
        
        
        @property { string } [application]
        
        @property { boolean } [applied]
        
        @property { boolean } [customized]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [version]
        
        @property { string } [parent_theme_version]
        
        @property { string } [parent_theme]
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { Array<availableSectionSchema> } [available_sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Config } [config]
        
        @property { Object } [settings]
        
        @property { Font } [font]
        
        @property { string } [_id]
        
        @property { number } [__v]
        
        @property { Colors } [colors]
        
         
    */

/**
        @typedef availableSectionSchema
        
        
        @property { Blocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
         
    */

/**
        @typedef Information
        
        
        @property { Images } [images]
        
        @property { Array<string> } [features]
        
        @property { string } [name]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Images
        
        
        @property { Array<string> } [desktop]
        
        @property { Array<string> } [android]
        
        @property { Array<string> } [ios]
        
        @property { Array<string> } [thumbnail]
        
         
    */

/**
        @typedef Src
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef AssetsSchema
        
        
        @property { UmdJs } [umd_js]
        
        @property { CommonJs } [common_js]
        
        @property { Css } [css]
        
         
    */

/**
        @typedef UmdJs
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef CommonJs
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef Css
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef Seo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Sections
        
        
        @property { string } [attributes]
        
         
    */

/**
        @typedef Config
        
        
        @property { Preset } [preset]
        
        @property { GlobalSchema } [global_schema]
        
        @property { string } [current]
        
        @property { ListSchema } [list]
        
         
    */

/**
        @typedef Preset
        
        
        @property { Array<AvailablePageSchema> } [sections]
        
         
    */

/**
        @typedef GlobalSchema
        
        
        @property { Object } [props]
        
         
    */

/**
        @typedef ListSchema
        
        
        @property { Object } [global]
        
        @property { ConfigPage } [page]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Colors
        
        
        @property { string } [bg_color]
        
        @property { string } [primary_color]
        
        @property { string } [secondary_color]
        
        @property { string } [accent_color]
        
        @property { string } [link_color]
        
        @property { string } [button_secondary_color]
        
         
    */

/**
        @typedef Custom
        
        
        @property { Object } [props]
        
         
    */

/**
        @typedef ConfigPage
        
        
        @property { Object } [settings]
        
        @property { string } [page]
        
         
    */

/**
        @typedef Font
        
        
        @property { string } [family]
        
        @property { Variants } [variants]
        
         
    */

/**
        @typedef Variants
        
        
        @property { Medium } [medium]
        
        @property { SemiBold } [semi_bold]
        
        @property { Bold } [bold]
        
        @property { Light } [light]
        
        @property { Regular } [regular]
        
         
    */

/**
        @typedef Medium
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef SemiBold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Bold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Light
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Regular
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Blocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { BlocksProps } [props]
        
         
    */

/**
        @typedef BlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */

/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { EditProfileMobileSchema } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profile_pic_url]
        
        @property { string } [android_hash]
        
        @property { string } [sender]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef EditProfileMobileSchema
        
        
        @property { string } [phone]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef VerifyEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [android_hash]
        
        @property { string } [force]
        
        @property { string } [captcha_code]
        
         
    */

/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [old_password]
        
        @property { string } [new_password]
        
         
    */

/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */

/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */

/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [captcha_code]
        
         
    */

/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captcha_code]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */

/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [captcha_code]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [is_signed_in]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */

/**
        @typedef UserObjectSchema
        
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef AuthSuccess
        
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef SendOtpResponse
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [email]
        
        @property { string } [resend_email_token]
        
        @property { string } [register_token]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { boolean } [user_exists]
        
         
    */

/**
        @typedef ProfileEditSuccess
        
        
        @property { UserSchema } [user]
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
        @property { boolean } [verify_email_link]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { string } [email]
        
         
    */

/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [user_exists]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */

/**
        @typedef RegisterFormSuccess
        
        
        @property { string } [email]
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { string } [resend_email_token]
        
        @property { string } [register_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { boolean } [user_exists]
        
         
    */

/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */

/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */

/**
        @typedef OtpSuccess
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { string } [register_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef EmailOtpSuccess
        
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */

/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_mobile_link]
        
         
    */

/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_email_link]
        
         
    */

/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verify_mobile_link]
        
         
    */

/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verify_email_link]
        
         
    */

/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */

/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */

/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef AuthenticationInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_email_link]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { string } [user]
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
         
    */

/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [country_code]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [access_token]
        
        @property { number } [expiry]
        
        @property { string } [refresh_token]
        
         
    */

/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [last_name]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [full_name]
        
        @property { string } [first_name]
        
         
    */

/**
        @typedef AuthSuccessUser
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */

/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */

/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [look_and_feel]
        
        @property { string } [updated_at]
        
        @property { boolean } [active]
        
        @property { boolean } [forgot_password]
        
        @property { Login } [login]
        
        @property { boolean } [skip_captcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [_id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [required_fields]
        
        @property { RegisterRequiredFields } [register_required_fields]
        
        @property { boolean } [skip_login]
        
        @property { FlashCard } [flash_card]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [social_tokens]
        
        @property { string } [created_at]
        
        @property { boolean } [register]
        
        @property { string } [mobile_image]
        
        @property { string } [desktop_image]
        
         
    */

/**
        @typedef LookAndFeel
        
        
        @property { string } [card_position]
        
        @property { string } [background_color]
        
         
    */

/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */

/**
        @typedef MetaSchema
        
        
        @property { boolean } [fynd_default]
        
         
    */

/**
        @typedef Social
        
        
        @property { boolean } [account_kit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */

/**
        @typedef RequiredFields
        
        
        @property { PlatformEmail } [email]
        
        @property { PlatformMobile } [mobile]
        
         
    */

/**
        @typedef PlatformEmail
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef PlatformMobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */

/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [text_color]
        
        @property { string } [background_color]
        
         
    */

/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [account_kit]
        
        @property { Google } [google]
        
         
    */

/**
        @typedef Facebook
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef Accountkit
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef Google
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef UserSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { Array<PhoneNumber> } [phone_numbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { boolean } [active]
        
        @property { string } [profile_pic_url]
        
        @property { string } [username]
        
        @property { string } [account_type]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [has_old_password_hash]
        
        @property { string } [_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { string } [shipping]
        
        @property { Array<ApplicationLegalFAQ> } [faq]
        
        @property { string } [_id]
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef ApplicationLegalFAQ
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef SeoComponent
        
        
        @property { SeoSchema } [seo]
        
         
    */

/**
        @typedef SeoSchema
        
        
        @property { string } [app]
        
        @property { string } [_id]
        
        @property { string } [robots_txt]
        
        @property { boolean } [sitemap_enabled]
        
        @property { Array<Object> } [custom_meta_tags]
        
        @property { Detail } [details]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef CustomMetaTag
        
        
        @property { string } [name]
        
        @property { string } [content]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef Detail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef AnnouncementPageSchema
        
        
        @property { string } [page_slug]
        
        @property { string } [type]
        
         
    */

/**
        @typedef EditorMeta
        
        
        @property { string } [foreground_color]
        
        @property { string } [background_color]
        
        @property { string } [content_type]
        
        @property { string } [content]
        
         
    */

/**
        @typedef AnnouncementAuthorSchema
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
         
    */

/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [_id]
        
        @property { Array<string> } [platforms]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<AnnouncementPageSchema> } [pages]
        
        @property { EditorMeta } [editor_meta]
        
        @property { AnnouncementAuthorSchema } [author]
        
        @property { string } [created_at]
        
        @property { string } [app]
        
        @property { string } [modified_at]
        
        @property { ScheduleSchema } [_schedule]
        
         
    */

/**
        @typedef ScheduleSchema
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { Array<Object> } [next_schedule]
        
         
    */

/**
        @typedef NextSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef AnnouncementSchema
        
        
        @property { string } [announcement]
        
        @property { scheduleStartSchema } [schedule]
        
         
    */

/**
        @typedef scheduleStartSchema
        
        
        @property { string } [start]
        
         
    */

/**
        @typedef BlogGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Asset
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [id]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BlogSchema
        
        
        @property { string } [_id]
        
        @property { Object } [_custom_json]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Author } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [_schedule]
        
        @property { string } [title]
        
        @property { DateMeta } [date_meta]
        
         
    */

/**
        @typedef SEO
        
        
        @property { string } [description]
        
        @property { SEOImage } [image]
        
        @property { string } [title]
        
         
    */

/**
        @typedef SEOImage
        
        
        @property { string } [url]
        
         
    */

/**
        @typedef BlogRequest
        
        
        @property { string } [application]
        
        @property { Object } [_custom_json]
        
        @property { Author } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [_schedule]
        
         
    */

/**
        @typedef GetAnnouncementListSchema
        
        
        @property { Array<AdminAnnouncementSchema> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CreateAnnouncementSchema
        
        
        @property { string } [message]
        
        @property { AdminAnnouncementSchema } [data]
        
         
    */

/**
        @typedef Navigation
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [orientation]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [_id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef LocaleLanguage
        
        
        @property { Language } [hi]
        
        @property { Language } [ar]
        
        @property { Language } [en_us]
        
         
    */

/**
        @typedef Language
        
        
        @property { string } [display]
        
         
    */

/**
        @typedef Action
        
        
        @property { ActionPage } [page]
        
        @property { ActionPage } [popup]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ActionPage
        
        
        @property { Object } [params]
        
        @property { Object } [query]
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef NavigationReference
        
        
        @property { Array<string> } [acl]
        
        @property { Array<string> } [tags]
        
        @property { LocaleLanguage } [_locale_language]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sort_order]
        
        @property { NavigationReference } [sub_navigation]
        
         
    */

/**
        @typedef LandingPage
        
        
        @property { LandingPageSchema } [data]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef ConfigurationSchema
        
        
        @property { number } [sleep_time]
        
        @property { boolean } [start_on_launch]
        
        @property { number } [duration]
        
        @property { string } [slide_direction]
        
         
    */

/**
        @typedef SlideshowMedia
        
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [bg_color]
        
        @property { number } [duration]
        
        @property { boolean } [auto_decide_duration]
        
        @property { Action } [action]
        
         
    */

/**
        @typedef Slideshow
        
        
        @property { SlideshowSchema } [data]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef AnnouncementsResponseSchema
        
        
        @property { Object } [announcements]
        
        @property { number } [refresh_rate]
        
        @property { Array<string> } [refresh_pages]
        
         
    */

/**
        @typedef FaqResponseSchema
        
        
        @property { Array<FAQ> } [faqs]
        
         
    */

/**
        @typedef UpdateHandpickedSchema
        
        
        @property { HandpickedTagSchema } [tag]
        
         
    */

/**
        @typedef HandpickedTagSchema
        
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [sub_type]
        
        @property { string } [content]
        
         
    */

/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CreateTagSchema
        
        
        @property { string } [name]
        
        @property { string } [sub_type]
        
        @property { string } [_id]
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */

/**
        @typedef CreateTagRequestSchema
        
        
        @property { Array<CreateTagSchema> } [tags]
        
         
    */

/**
        @typedef APIError
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef CategorySchema
        
        
        @property { number } [index]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } [application]
        
         
    */

/**
        @typedef ChildrenSchema
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef CategoryRequestSchema
        
        
        @property { string } [slug]
        
        @property { string } [title]
        
         
    */

/**
        @typedef FAQCategorySchema
        
        
        @property { number } [index]
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { ChildrenSchema } [children]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [icon_url]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [_id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef FAQ
        
        
        @property { string } [slug]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef CreateFaqResponseSchema
        
        
        @property { FaqSchema } [faq]
        
         
    */

/**
        @typedef CreateFaqSchema
        
        
        @property { FAQ } [faq]
        
         
    */

/**
        @typedef GetFaqSchema
        
        
        @property { Array<Object> } [faqs]
        
         
    */

/**
        @typedef UpdateFaqCategoryRequestSchema
        
        
        @property { CategorySchema } [category]
        
         
    */

/**
        @typedef CreateFaqCategoryRequestSchema
        
        
        @property { CategoryRequestSchema } [category]
        
         
    */

/**
        @typedef CreateFaqCategorySchema
        
        
        @property { CategorySchema } [category]
        
         
    */

/**
        @typedef GetFaqCategoriesSchema
        
        
        @property { Array<CategorySchema> } [categories]
        
         
    */

/**
        @typedef GetFaqCategoryBySlugSchema
        
        
        @property { FAQCategorySchema } [category]
        
         
    */

/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef DefaultNavigationResponse
        
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef NavigationGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Orientation
        
        
        @property { Array<string> } [portrait]
        
        @property { Array<string> } [landscape]
        
         
    */

/**
        @typedef NavigationSchema
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { Orientation } [orientation]
        
        @property { number } [version]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef NavigationRequest
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Orientation } [orientation]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef CustomPageSchema
        
        
        @property { string } [_id]
        
        @property { string } [platform]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { string } [orientation]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { Array<ContentSchema> } [content]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { ScheduleSchema } [_schedule]
        
         
    */

/**
        @typedef ContentSchema
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef CustomPage
        
        
        @property { CustomPageSchema } [data]
        
         
    */

/**
        @typedef FeatureImage
        
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef PageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PageSpec
        
        
        @property { Array<Object> } [specifications]
        
         
    */

/**
        @typedef PageSpecParam
        
        
        @property { string } [key]
        
        @property { boolean } [required]
        
         
    */

/**
        @typedef PageSpecItem
        
        
        @property { string } [page_type]
        
        @property { string } [display_name]
        
        @property { Array<PageSpecParam> } [params]
        
        @property { Array<PageSpecParam> } [query]
        
         
    */

/**
        @typedef PageSchema
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { Array<string> } [component_ids]
        
        @property { Array<PageContent> } [content]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [description]
        
        @property { Asset } [feature_image]
        
        @property { Array<PageMeta> } [page_meta]
        
        @property { ScheduleSchema } [_schedule]
        
        @property { Object } [_custom_json]
        
        @property { string } [orientation]
        
        @property { string } [platform]
        
        @property { boolean } [published]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { SEO } [seo]
        
        @property { Object } [visibility]
        
         
    */

/**
        @typedef CreatedBySchema
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef PageContent
        
        
        @property { string } [type]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageMeta
        
        
        @property { string } [key]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageRequest
        
        
        @property { CronSchedule } [_schedule]
        
        @property { string } [application]
        
        @property { Author } [author]
        
        @property { Object } [_custom_json]
        
        @property { string } [orientation]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { string } [title]
        
         
    */

/**
        @typedef CronSchedule
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
         
    */

/**
        @typedef PagePublishRequest
        
        
        @property { boolean } [publish]
        
         
    */

/**
        @typedef PageMetaSchema
        
        
        @property { Array<Object> } [system_pages]
        
        @property { Array<Object> } [custom_pages]
        
        @property { string } [application_id]
        
         
    */

/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SlideshowSchema
        
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<SlideshowMedia> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { SlideshowMedia } [media]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Support
        
        
        @property { boolean } [created]
        
        @property { string } [_id]
        
        @property { string } [config_type]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { ContactSchema } [contact]
        
         
    */

/**
        @typedef PhoneProperties
        
        
        @property { string } [key]
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */

/**
        @typedef PhoneSchema
        
        
        @property { boolean } [active]
        
        @property { Array<PhoneProperties> } [phone]
        
         
    */

/**
        @typedef EmailProperties
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */

/**
        @typedef EmailSchema
        
        
        @property { boolean } [active]
        
        @property { Array<EmailProperties> } [email]
        
         
    */

/**
        @typedef ContactSchema
        
        
        @property { PhoneSchema } [phone]
        
        @property { EmailSchema } [email]
        
         
    */

/**
        @typedef TagsSchema
        
        
        @property { string } [application]
        
        @property { string } [_id]
        
        @property { Array<TagSchema> } [tags]
        
         
    */

/**
        @typedef TagSchema
        
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [sub_type]
        
        @property { string } [_id]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */

/**
        @typedef ErrorResponseSchema
        
        
        @property { string } [message]
        
        @property { number } [code]
        
         
    */

/**
        @typedef Success
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef CreatedModifiedByObject
        
        
        @property { string } [username]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef PickupPointResponse
        
        
        @property { Array<ItemProperties> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PickupPointSchema
        
        
        @property { Array<string> } [notification_emails]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [code]
        
        @property { AddressObject } [address]
        
        @property { AdditionalContactsObject } [additional_contacts]
        
        @property { Array<AdditionalContactsObject> } [timing]
        
        @property { CreatedModifiedByObject } [created_by]
        
        @property { TimingObject } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef ItemProperties
        
        
        @property { Array<string> } [notification_emails]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [code]
        
        @property { AddressObject } [address]
        
        @property { AdditionalContactsObject } [additional_contacts]
        
        @property { Array<AdditionalContactsObject> } [timing]
        
        @property { CreatedModifiedByObject } [created_by]
        
        @property { TimingObject } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef AddressObject
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef AdditionalContactsObject
        
        
        @property { number } [number]
        
        @property { number } [country_code]
        
         
    */

/**
        @typedef TimingObject
        
        
        @property { OpeningClosingObject } [opening]
        
        @property { OpeningClosingObject } [closing]
        
        @property { boolean } [open]
        
        @property { string } [weekday]
        
         
    */

/**
        @typedef OpeningClosingObject
        
        
        @property { string } [hour]
        
        @property { string } [minute]
        
         
    */

/**
        @typedef PickupResponse
        
        
        @property { Array<PickupResponseItems> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PickupConfiguration
        
        
        @property { boolean } [datetime_check]
        
        @property { string } [header]
        
        @property { string } [instruction_for_customer]
        
         
    */

/**
        @typedef PickupResponseItems
        
        
        @property { boolean } [datetime_check]
        
        @property { string } [header]
        
        @property { string } [instruction_for_customer]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef ShippingSchema
        
        
        @property { AssignmentSchema } [assignment]
        
        @property { string } [_id]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef ShippingResponse
        
        
        @property { ShippingSchema } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef AssignmentSchema
        
        
        @property { FulfillmentPriorityObject } [fulfillment_priority]
        
        @property { string } [default_sort_strategy]
        
         
    */

/**
        @typedef FulfillmentPriorityObject
        
        
        @property { string } [priorities]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef StoreSchema
        
        
        @property { StoreAssignmentObject } [assignment]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef StoreResponse
        
        
        @property { StoreSchema } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef StoreAssignmentObject
        
        
        @property { StrategyObject } [strategy]
        
        @property { string } [assignment_type]
        
         
    */

/**
        @typedef StrategyObject
        
        
        @property { Array<StrategyItems> } [rules]
        
         
    */

/**
        @typedef StrategyItems
        
        
        @property { Array<string> } [product_tags]
        
        @property { string } [zone]
        
         
    */

/**
        @typedef StoreListResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ZoneSchema
        
        
        @property { ZoneDetailsObject } [zone_detail]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef ZoneListResponse
        
        
        @property { Array<ZoneSchema> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef RegionObject
        
        
        @property { string } [country]
        
        @property { string } [state]
        
         
    */

/**
        @typedef PincodeObject
        
        
        @property { Array<number> } [pincode_list]
        
         
    */

/**
        @typedef RadiusObject
        
        
        @property { number } [value]
        
         
    */

/**
        @typedef ZoneDetailsObject
        
        
        @property { RadiusObject } [radius]
        
        @property { PincodeObject } [pincode]
        
        @property { RegionObject } [region]
        
         
    */

/**
        @typedef StatsImported
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef StatsProcessedEmail
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */

/**
        @typedef StatsProcessedSms
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */

/**
        @typedef StatsProcessed
        
        
        @property { StatsProcessedEmail } [email]
        
        @property { StatsProcessedSms } [sms]
        
         
    */

/**
        @typedef Stats
        
        
        @property { string } [_id]
        
        @property { any } [imported]
        
        @property { any } [processed]
        
         
    */

/**
        @typedef GetStats
        
        
        @property { Array<Stats> } [items]
        
         
    */

/**
        @typedef CampaignReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
         
    */

/**
        @typedef RecipientHeaders
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef CampaignEmailTemplate
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */

/**
        @typedef CampignEmailProvider
        
        
        @property { string } [_id]
        
        @property { string } [from_name]
        
        @property { string } [from_email]
        
         
    */

/**
        @typedef CampaignEmail
        
        
        @property { CampaignEmailTemplate } [template]
        
        @property { CampignEmailProvider } [provider]
        
         
    */

/**
        @typedef Campaign
        
        
        @property { RecipientHeaders } [recipient_headers]
        
        @property { CampaignEmail } [email]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [datasource]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Campaigns
        
        
        @property { Array<Campaign> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef BigqueryHeadersReq
        
        
        @property { string } [query]
        
        @property { string } [type]
        
         
    */

/**
        @typedef BigqueryHeadersResHeaders
        
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */

/**
        @typedef BigqueryHeadersRes
        
        
        @property { Array<BigqueryHeadersResHeaders> } [headers]
        
         
    */

/**
        @typedef GetNRecordsCsvReq
        
        
        @property { string } [url]
        
        @property { boolean } [header]
        
        @property { number } [count]
        
         
    */

/**
        @typedef GetNRecordsCsvResItems
        
        
        @property { string } [phone_number]
        
        @property { string } [email]
        
        @property { string } [firstname]
        
        @property { string } [lastname]
        
        @property { string } [orderid]
        
         
    */

/**
        @typedef GetNRecordsCsvRes
        
        
        @property { Array<GetNRecordsCsvResItems> } [items]
        
         
    */

/**
        @typedef AudienceReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
         
    */

/**
        @typedef Audience
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Audiences
        
        
        @property { Array<Audience> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef EmailProviderReqFrom
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { boolean } [is_default]
        
         
    */

/**
        @typedef EmailProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [api_key]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
         
    */

/**
        @typedef EmailProvider
        
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [api_key]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef EmailProviders
        
        
        @property { Array<EmailProvider> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef EmailTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef EmailTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef EmailTemplateKeys
        
        
        @property { string } [to]
        
        @property { string } [cc]
        
        @property { string } [bcc]
        
         
    */

/**
        @typedef EmailTemplateHeaders
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */

/**
        @typedef EmailTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { Array<string> } [static_to]
        
        @property { Array<string> } [static_cc]
        
        @property { Array<string> } [static_bcc]
        
        @property { string } [reply_to]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */

/**
        @typedef TemplateAndType
        
        
        @property { string } [template_type]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EmailTemplateRes
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<string> } [static_to]
        
        @property { Array<string> } [static_cc]
        
        @property { Array<string> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { string } [reply_to]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef EmailTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [static_to]
        
        @property { Array<any> } [static_cc]
        
        @property { Array<any> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [from_name]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SystemEmailTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [static_to]
        
        @property { Array<any> } [static_cc]
        
        @property { Array<any> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [from_name]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef EmailTemplates
        
        
        @property { Array<EmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SystemEmailTemplates
        
        
        @property { Array<SystemEmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef EventSubscriptionTemplateSms
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EventSubscriptionTemplateEmail
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EventSubscriptionTemplate
        
        
        @property { EventSubscriptionTemplateSms } [sms]
        
        @property { EventSubscriptionTemplateEmail } [email]
        
         
    */

/**
        @typedef EventSubscription
        
        
        @property { EventSubscriptionTemplate } [template]
        
        @property { boolean } [is_default]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [event]
        
        @property { string } [slug]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef EventSubscriptions
        
        
        @property { Array<EventSubscription> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef TriggerJobResponse
        
        
        @property { number } [status]
        
         
    */

/**
        @typedef TriggerJobRequest
        
        
        @property { string } [job_id]
        
         
    */

/**
        @typedef Job
        
        
        @property { boolean } [completed]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [campaign]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Jobs
        
        
        @property { Array<Job> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef JobLog
        
        
        @property { any } [imported]
        
        @property { any } [processed]
        
        @property { string } [_id]
        
        @property { string } [job]
        
        @property { string } [campaign]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef JobLogs
        
        
        @property { Array<JobLog> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef LogEmail
        
        
        @property { string } [template]
        
         
    */

/**
        @typedef LogPushnotification
        
        
        @property { Array<string> } [pushtokens]
        
         
    */

/**
        @typedef LogMeta
        
        
        @property { string } [type]
        
        @property { string } [identifier]
        
        @property { string } [key]
        
        @property { string } [offset]
        
        @property { string } [partition]
        
        @property { string } [topic]
        
         
    */

/**
        @typedef Log
        
        
        @property { LogEmail } [email]
        
        @property { LogPushnotification } [pushnotification]
        
        @property { LogMeta } [meta]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [service]
        
        @property { string } [step]
        
        @property { string } [status]
        
        @property { any } [data]
        
        @property { string } [expire_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef Logs
        
        
        @property { Array<Log> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundle_identifier]
        
        @property { string } [push_token]
        
        @property { string } [unique_device_id]
        
         
    */

/**
        @typedef PushtokenRes
        
        
        @property { string } [_id]
        
        @property { string } [bundle_identifier]
        
        @property { string } [push_token]
        
        @property { string } [unique_device_id]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [application_id]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [expired_at]
        
         
    */

/**
        @typedef SmsProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
         
    */

/**
        @typedef SmsProvider
        
        
        @property { number } [rpt]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SmsProviders
        
        
        @property { Array<SmsProvider> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SmsTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef SmsTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef SmsTemplateMessage
        
        
        @property { string } [template_type]
        
        @property { string } [template]
        
         
    */

/**
        @typedef SmsTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */

/**
        @typedef SmsTemplateRes
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SmsTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { string } [priority]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SystemSmsTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SmsTemplates
        
        
        @property { Array<SmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SystemSmsTemplates
        
        
        @property { Array<SystemSmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Notification
        
        
        @property { string } [title]
        
        @property { string } [body]
        
        @property { string } [subtitle]
        
        @property { string } [icon]
        
        @property { string } [deeplink]
        
        @property { string } [click_action]
        
         
    */

/**
        @typedef SystemNotificationUser
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SystemNotificationSettings
        
        
        @property { boolean } [sound]
        
        @property { string } [priority]
        
        @property { string } [time_to_live]
        
         
    */

/**
        @typedef SystemNotification
        
        
        @property { Notification } [notification]
        
        @property { SystemNotificationUser } [user]
        
        @property { SystemNotificationUser } [settings]
        
        @property { string } [_id]
        
        @property { string } [group]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef SystemNotificationsPage
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
         
    */

/**
        @typedef SystemNotifications
        
        
        @property { Array<SystemNotification> } [items]
        
        @property { number } [last_read_anchor]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { Array<string> } excluded_fields
        
        @property { Array<string> } display_fields
        
        @property { Array<Object> } [aggregators]
        
        @property { boolean } created
        
        @property { boolean } success
        
        @property { string } app_id
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { string } description
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } merchant_salt
        
        @property { string } secret
        
        @property { string } config_type
        
        @property { string } key
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { boolean } [is_active]
        
        @property { PaymentGatewayConfig } [aggregator_name]
        
        @property { string } app_id
        
         
    */

/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { Array<string> } aggregator
        
        @property { boolean } success
        
         
    */

/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } code
        
        @property { string } description
        
         
    */

/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */

/**
        @typedef PaymentModeList
        
        
        @property { string } [card_reference]
        
        @property { string } [card_name]
        
        @property { string } [display_name]
        
        @property { string } [card_id]
        
        @property { number } [exp_year]
        
        @property { string } [card_issuer]
        
        @property { string } [merchant_code]
        
        @property { PaymentModeLogo } [logo_url]
        
        @property { string } [fynd_vpa]
        
        @property { Array<string> } [intent_app_error_list]
        
        @property { string } [name]
        
        @property { string } aggregator_name
        
        @property { string } [card_isin]
        
        @property { string } [card_brand_image]
        
        @property { string } [nickname]
        
        @property { boolean } [expired]
        
        @property { number } [display_priority]
        
        @property { string } [code]
        
        @property { number } [retry_count]
        
        @property { string } [card_number]
        
        @property { number } [timeout]
        
        @property { string } [intent_flow]
        
        @property { string } [card_brand]
        
        @property { string } [card_token]
        
        @property { string } [card_type]
        
        @property { string } [card_fingerprint]
        
        @property { number } [exp_month]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { boolean } [add_card_enabled]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } name
        
        @property { string } display_name
        
        @property { string } [aggregator_name]
        
        @property { number } display_priority
        
        @property { boolean } [anonymous_enable]
        
         
    */

/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } payment_option
        
         
    */

/**
        @typedef PaymentOptionsResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptions } payment_options
        
         
    */

/**
        @typedef PayoutsResponse
        
        
        @property { string } transfer_type
        
        @property { boolean } is_default
        
        @property { Object } unique_transfer_no
        
        @property { Object } customers
        
        @property { Array<Object> } payouts_aggregators
        
        @property { boolean } is_active
        
        @property { Object } more_attributes
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { string } transfer_type
        
        @property { string } unique_external_id
        
        @property { string } aggregator
        
        @property { Object } bank_details
        
        @property { boolean } is_active
        
        @property { Object } users
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { string } transfer_type
        
        @property { string } payment_status
        
        @property { string } unique_transfer_no
        
        @property { string } aggregator
        
        @property { Object } payouts
        
        @property { Object } bank_details
        
        @property { boolean } created
        
        @property { boolean } success
        
        @property { boolean } is_active
        
        @property { Object } users
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } is_active
        
        @property { boolean } is_default
        
        @property { boolean } success
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } is_active
        
        @property { string } unique_external_id
        
        @property { boolean } is_default
        
         
    */

/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { Array<Object> } data
        
        @property { boolean } success
        
         
    */

/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionConfigResponse
        
        
        @property { Object } config
        
        @property { string } aggregator
        
        @property { boolean } success
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } unique_external_id
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { Object } data
        
        @property { boolean } success
        
         
    */

/**
        @typedef BankDetails
        
        
        @property { string } [address]
        
        @property { string } account_holder
        
        @property { string } [comment]
        
        @property { string } mobile
        
        @property { string } account_no
        
        @property { string } branch_name
        
        @property { string } bank_name
        
        @property { string } ifsc_code
        
        @property { string } email
        
         
    */

/**
        @typedef AddBeneficiaryDetailsRequest
        
        
        @property { string } transfer_mode
        
        @property { string } order_id
        
        @property { boolean } delights
        
        @property { string } shipment_id
        
        @property { BankDetails } details
        
         
    */

/**
        @typedef RefundAccountResponse
        
        
        @property { string } message
        
        @property { Object } [data]
        
        @property { boolean } success
        
         
    */

/**
        @typedef NotFoundResourceError
        
        
        @property { string } code
        
        @property { string } description
        
        @property { boolean } success
        
         
    */

/**
        @typedef IfscCodeResponse
        
        
        @property { string } branch_name
        
        @property { string } bank_name
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef OrderBeneficiaryDetails
        
        
        @property { string } address
        
        @property { string } account_holder
        
        @property { string } display_name
        
        @property { string } transfer_mode
        
        @property { boolean } [comment]
        
        @property { string } beneficiary_id
        
        @property { string } email
        
        @property { string } title
        
        @property { boolean } is_active
        
        @property { string } created_on
        
        @property { string } account_no
        
        @property { string } delights_user_name
        
        @property { boolean } [branch_name]
        
        @property { string } bank_name
        
        @property { string } ifsc_code
        
        @property { number } id
        
        @property { boolean } [mobile]
        
        @property { string } modified_on
        
        @property { string } subtitle
        
         
    */

/**
        @typedef OrderBeneficiaryResponse
        
        
        @property { Array<OrderBeneficiaryDetails> } beneficiaries
        
         
    */

/**
        @typedef SearchKeywordResult
        
        
        @property { string } sort_on
        
        @property { Object } query
        
         
    */

/**
        @typedef CreateSearchKeyword
        
        
        @property { Object } [_custom_json]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
        @property { SearchKeywordResult } result
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef GetSearchWordsData
        
        
        @property { Object } [_custom_json]
        
        @property { Array<string> } [words]
        
        @property { Object } [result]
        
        @property { string } [uid]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
        @property { string } [message]
        
         
    */

/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */

/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
    */

/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */

/**
        @typedef AutocompletePageAction
        
        
        @property { string } type
        
        @property { Object } [params]
        
        @property { Object } query
        
        @property { string } [url]
        
         
    */

/**
        @typedef AutocompleteAction
        
        
        @property { string } [type]
        
        @property { AutocompletePageAction } [page]
        
         
    */

/**
        @typedef AutocompleteResult
        
        
        @property { Media } [logo]
        
        @property { Object } [_custom_json]
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
         
    */

/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Object } [_custom_json]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef GetAutocompleteWordsData
        
        
        @property { Array<Object> } [results]
        
        @property { Object } [_custom_json]
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */

/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Array<string> } [words]
        
        @property { Object } [_custom_json]
        
        @property { Array<Object> } [results]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef ProductBundleItem
        
        
        @property { boolean } [auto_add_to_cart]
        
        @property { number } min_quantity
        
        @property { number } product_uid
        
        @property { number } max_quantity
        
        @property { boolean } [allow_remove]
        
        @property { boolean } [auto_select]
        
         
    */

/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } [modified_on]
        
        @property { string } slug
        
        @property { Object } [created_by]
        
        @property { string } choice
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { string } [created_on]
        
        @property { boolean } is_active
        
        @property { Array<string> } [page_visibility]
        
        @property { boolean } [same_store_assignment]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Object } [modified_by]
        
        @property { string } [id]
        
        @property { number } [company_id]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */

/**
        @typedef ProductBundleRequest
        
        
        @property { string } [modified_on]
        
        @property { string } slug
        
        @property { Object } [created_by]
        
        @property { string } choice
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { string } [created_on]
        
        @property { boolean } is_active
        
        @property { Array<string> } [page_visibility]
        
        @property { boolean } [same_store_assignment]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Object } [modified_by]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } [modified_on]
        
        @property { string } slug
        
        @property { string } choice
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { Array<string> } [page_visibility]
        
        @property { boolean } [same_store_assignment]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Object } [modified_by]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef LimitedProductData
        
        
        @property { string } [slug]
        
        @property { string } [short_description]
        
        @property { Object } [identifier]
        
        @property { Array<string> } [images]
        
        @property { string } [country_of_origin]
        
        @property { string } [item_code]
        
        @property { Array<string> } [sizes]
        
        @property { Object } [price]
        
        @property { Object } [attributes]
        
        @property { number } [uid]
        
        @property { number } [quantity]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Size
        
        
        @property { string } [value]
        
        @property { string } [display]
        
        @property { number } [quantity]
        
        @property { boolean } [is_available]
        
         
    */

/**
        @typedef Price
        
        
        @property { number } [min_marked]
        
        @property { number } [min_effective]
        
        @property { number } [max_marked]
        
        @property { number } [max_effective]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef GetProducts
        
        
        @property { number } [min_quantity]
        
        @property { boolean } [auto_add_to_cart]
        
        @property { LimitedProductData } [product_details]
        
        @property { number } [product_uid]
        
        @property { Array<Size> } [sizes]
        
        @property { Price } [price]
        
        @property { number } [max_quantity]
        
        @property { boolean } [allow_remove]
        
        @property { boolean } [auto_select]
        
         
    */

/**
        @typedef GetProductBundleResponse
        
        
        @property { string } [slug]
        
        @property { string } [choice]
        
        @property { string } [logo]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [page_visibility]
        
        @property { boolean } [same_store_assignment]
        
        @property { Array<GetProducts> } [products]
        
        @property { Object } [meta]
        
        @property { number } [company_id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef Meta
        
        
        @property { Array<Object> } [values]
        
        @property { string } [unit]
        
        @property { Object } [headers]
        
         
    */

/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */

/**
        @typedef ValidateSizeGuide
        
        
        @property { string } [image]
        
        @property { Object } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [id]
        
        @property { string } name
        
        @property { string } [created_on]
        
        @property { boolean } [active]
        
        @property { number } [brand_id]
        
        @property { Object } [modified_by]
        
        @property { string } [subtitle]
        
        @property { string } [tag]
        
        @property { string } [description]
        
        @property { number } [company_id]
        
        @property { Guide } [guide]
        
        @property { string } title
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef SizeGuideResponse
        
        
        @property { string } [modified_on]
        
        @property { Object } [created_by]
        
        @property { string } [id]
        
        @property { string } [created_on]
        
        @property { boolean } [active]
        
        @property { number } [brand_id]
        
        @property { Object } [modified_by]
        
        @property { string } [subtitle]
        
        @property { string } [tag]
        
        @property { string } [title]
        
        @property { number } [company_id]
        
        @property { Object } [guide]
        
        @property { string } [name]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [compare]
        
        @property { Object } [similar]
        
        @property { Object } [variant]
        
        @property { Object } [detail]
        
         
    */

/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */

/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [key]
        
        @property { string } [display]
        
        @property { Array<Object> } [units]
        
        @property { Array<string> } [filter_types]
        
         
    */

/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingSortResponse } sort
        
        @property { MetaDataListingFilterResponse } filter
        
         
    */

/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { MetaDataListingResponse } [listing]
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { number } max
        
        @property { number } min
        
         
    */

/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } key
        
        @property { ProductSize } [size]
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { string } [subtitle]
        
        @property { number } priority
        
        @property { string } [title]
        
         
    */

/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } key
        
        @property { ProductSize } size
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { string } display_type
        
        @property { number } priority
        
        @property { string } name
        
         
    */

/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductSimilar } similar
        
        @property { ConfigurationProductVariant } variant
        
         
    */

/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { number } priority
        
        @property { string } [name]
        
         
    */

/**
        @typedef ConfigurationListingSort
        
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
        @property { string } default_key
        
         
    */

/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */

/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Object } [map]
        
        @property { string } [value]
        
        @property { string } [condition]
        
        @property { Array<ConfigurationBucketPoints> } [bucket_points]
        
        @property { string } [sort]
        
         
    */

/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { string } type
        
        @property { ConfigurationListingFilterValue } [value_config]
        
        @property { number } priority
        
        @property { string } [name]
        
         
    */

/**
        @typedef ConfigurationListingFilter
        
        
        @property { Array<ConfigurationListingFilterConfig> } [attribute_config]
        
        @property { boolean } allow_single
        
         
    */

/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */

/**
        @typedef AppCatalogConfiguration
        
        
        @property { ConfigurationProduct } [product]
        
        @property { string } config_type
        
        @property { string } [config_id]
        
        @property { string } app_id
        
        @property { string } [id]
        
        @property { ConfigurationListing } [listing]
        
         
    */

/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */

/**
        @typedef AppConfiguration
        
        
        @property { ConfigurationProduct } [product]
        
        @property { string } config_type
        
        @property { string } [config_id]
        
        @property { string } app_id
        
        @property { ConfigurationListing } [listing]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */

/**
        @typedef EntityConfiguration
        
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } config_type
        
        @property { string } [config_id]
        
        @property { string } app_id
        
        @property { string } [id]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
         
    */

/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { EntityConfiguration } [data]
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { boolean } [is_selected]
        
        @property { string } [value]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { string } value
        
        @property { boolean } is_selected
        
        @property { number } [max]
        
        @property { number } [selected_max]
        
        @property { number } [count]
        
        @property { string } [query_format]
        
        @property { string } [currency_symbol]
        
        @property { string } [display_format]
        
        @property { string } display
        
        @property { number } [min]
        
        @property { string } [currency_code]
        
        @property { number } [selected_min]
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } [logo]
        
        @property { string } display
        
        @property { string } [kind]
        
        @property { string } name
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */

/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */

/**
        @typedef BannerImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [landscape]
        
        @property { BannerImage } [portrait]
        
         
    */

/**
        @typedef Media1
        
        
        @property { string } [type]
        
        @property { Object } [meta]
        
        @property { string } url
        
         
    */

/**
        @typedef ProductListingActionPage
        
        
        @property { string } [type]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef ProductListingAction
        
        
        @property { string } [type]
        
        @property { ProductListingActionPage } [page]
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { string } [slug]
        
        @property { Object } [cron]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [query]
        
        @property { Object } [_schedule]
        
        @property { Media1 } [logo]
        
        @property { string } [description]
        
        @property { boolean } [allow_sort]
        
        @property { ProductListingAction } [action]
        
        @property { boolean } [allow_facets]
        
        @property { string } [app_id]
        
        @property { Object } [badge]
        
        @property { Object } [meta]
        
        @property { boolean } [is_active]
        
        @property { string } [type]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { string } [uid]
        
        @property { Array<string> } [tag]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { boolean } [is_selected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { boolean } [is_selected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { CollectionListingFilter } [filters]
        
         
    */

/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */

/**
        @typedef CollectionImage
        
        
        @property { string } aspect_ratio
        
        @property { string } url
        
         
    */

/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */

/**
        @typedef Schedule
        
        
        @property { number } [duration]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { string } [cron]
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
        @property { string } [email]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef CollectionBadge
        
        
        @property { string } [color]
        
        @property { string } [text]
        
         
    */

/**
        @typedef CreateCollection
        
        
        @property { string } slug
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { Object } [_custom_json]
        
        @property { Object } [_locale_language]
        
        @property { SeoDetail } [seo]
        
        @property { CollectionBanner } banners
        
        @property { Object } [query]
        
        @property { Schedule } [_schedule]
        
        @property { CollectionImage } logo
        
        @property { string } [description]
        
        @property { UserInfo } [created_by]
        
        @property { string } [sort_on]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [allow_facets]
        
        @property { UserInfo } [modified_by]
        
        @property { string } app_id
        
        @property { CollectionBadge } [badge]
        
        @property { Object } [meta]
        
        @property { boolean } [is_active]
        
        @property { string } type
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { string } name
        
         
    */

/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [slug]
        
        @property { Object } [_schedule]
        
        @property { BannerImage } [logo]
        
        @property { boolean } [is_active]
        
        @property { boolean } [allow_sort]
        
        @property { Object } [cron]
        
        @property { string } [type]
        
        @property { boolean } [allow_facets]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { ImageUrls } [banners]
        
        @property { string } [app_id]
        
        @property { Object } [query]
        
        @property { Object } [meta]
        
        @property { string } [description]
        
        @property { Array<string> } [tag]
        
        @property { Object } [badge]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [slug]
        
        @property { Object } [_schedule]
        
        @property { Media1 } [logo]
        
        @property { boolean } [is_active]
        
        @property { boolean } [allow_sort]
        
        @property { Object } [cron]
        
        @property { string } [type]
        
        @property { boolean } [allow_facets]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { ImageUrls } [banners]
        
        @property { string } [app_id]
        
        @property { Object } [query]
        
        @property { Object } [meta]
        
        @property { string } [description]
        
        @property { Array<string> } [tag]
        
        @property { Object } [badge]
        
        @property { string } [name]
        
         
    */

/**
        @typedef UpdateCollection
        
        
        @property { string } [slug]
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { Object } [_custom_json]
        
        @property { Object } [_locale_language]
        
        @property { SeoDetail } [seo]
        
        @property { CollectionBanner } [banners]
        
        @property { Object } [query]
        
        @property { Schedule } [_schedule]
        
        @property { CollectionImage } [logo]
        
        @property { string } [description]
        
        @property { string } [sort_on]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [allow_facets]
        
        @property { UserInfo } [modified_by]
        
        @property { CollectionBadge } [badge]
        
        @property { Object } [meta]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [key]
        
        @property { string } [value]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { Array<ProductDetailAttribute> } [details]
        
        @property { string } [title]
        
         
    */

/**
        @typedef Price1
        
        
        @property { number } [max]
        
        @property { number } [min]
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */

/**
        @typedef ProductBrand
        
        
        @property { Media1 } [logo]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { string } slug
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
        @property { string } [item_code]
        
        @property { Object } [attributes]
        
        @property { number } [rating]
        
        @property { string } [item_type]
        
        @property { Object } [promo_meta]
        
        @property { Array<string> } [similars]
        
        @property { string } [short_description]
        
        @property { number } [rating_count]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [color]
        
        @property { string } [description]
        
        @property { string } [product_online_date]
        
        @property { boolean } [sellable]
        
        @property { ProductListingPrice } [price]
        
        @property { string } [image_nature]
        
        @property { string } [discount]
        
        @property { Array<string> } [highlights]
        
        @property { Object } [teaser_tag]
        
        @property { boolean } [has_variant]
        
        @property { string } [type]
        
        @property { number } [uid]
        
        @property { Array<string> } [tryouts]
        
        @property { ProductBrand } [brand]
        
        @property { string } [name]
        
         
    */

/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Page } [page]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */

/**
        @typedef CollectionItemRequest
        
        
        @property { number } page_no
        
        @property { number } page_size
        
         
    */

/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [total_sizes]
        
        @property { number } [total_articles]
        
        @property { number } [available_sizes]
        
        @property { number } [article_freshness]
        
        @property { number } [available_articles]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CatalogInsightItem
        
        
        @property { number } [out_of_stock_count]
        
        @property { number } [count]
        
        @property { number } [sellable_count]
        
         
    */

/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brand_distribution]
        
        @property { CatalogInsightItem } [item]
        
         
    */

/**
        @typedef CrossSellingData
        
        
        @property { number } [articles]
        
        @property { number } [products]
        
         
    */

/**
        @typedef CrossSellingResponse
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brand_distribution]
        
         
    */

/**
        @typedef OptInPostRequest
        
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { string } opt_level
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef CompanyOptIn
        
        
        @property { Array<number> } brand_ids
        
        @property { number } modified_on
        
        @property { Object } [created_by]
        
        @property { string } opt_level
        
        @property { string } platform
        
        @property { number } created_on
        
        @property { Array<number> } store_ids
        
        @property { Object } [modified_by]
        
        @property { boolean } enabled
        
        @property { number } company_id
        
         
    */

/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */

/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [business_type]
        
        @property { number } [uid]
        
        @property { string } [company_type]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [brand_id]
        
        @property { string } [brand_name]
        
        @property { number } [total_article]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */

/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [store]
        
        @property { string } [company]
        
        @property { number } [brand]
        
         
    */

/**
        @typedef StoreDetail
        
        
        @property { string } [modified_on]
        
        @property { string } [store_type]
        
        @property { Array<Object> } [additional_contacts]
        
        @property { string } [display_name]
        
        @property { Array<Object> } [documents]
        
        @property { string } [created_on]
        
        @property { string } [store_code]
        
        @property { number } [uid]
        
        @property { Object } [timing]
        
        @property { number } [company_id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */

/**
        @typedef AttributeMasterDetails
        
        
        @property { string } display_type
        
         
    */

/**
        @typedef AttributeSchemaRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef AttributeMaster
        
        
        @property { boolean } [multi]
        
        @property { AttributeSchemaRange } [range]
        
        @property { string } [format]
        
        @property { Array<string> } [allowed_values]
        
        @property { string } type
        
        @property { boolean } [mandatory]
        
         
    */

/**
        @typedef AttributeMasterFilter
        
        
        @property { Array<string> } [depends_on]
        
        @property { number } [priority]
        
        @property { boolean } indexing
        
         
    */

/**
        @typedef AttributeMasterMandatoryDetails
        
        
        @property { Array<string> } [l3_keys]
        
         
    */

/**
        @typedef AttributeMasterMeta
        
        
        @property { AttributeMasterMandatoryDetails } mandatory_details
        
        @property { boolean } [enriched]
        
         
    */

/**
        @typedef GenderDetail
        
        
        @property { string } [slug]
        
        @property { boolean } [enabled_for_end_consumer]
        
        @property { Array<string> } [departments]
        
        @property { string } [logo]
        
        @property { AttributeMasterDetails } [details]
        
        @property { AttributeMaster } [schema]
        
        @property { AttributeMasterFilter } [filters]
        
        @property { AttributeMasterMeta } [meta]
        
        @property { boolean } [is_nested]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { Page } [page]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef PTErrorResponse
        
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
        @property { string } [contact]
        
         
    */

/**
        @typedef GetDepartment
        
        
        @property { string } [modified_on]
        
        @property { string } [slug]
        
        @property { UserSerializer } [created_by]
        
        @property { number } [page_size]
        
        @property { number } [priority_order]
        
        @property { string } [item_type]
        
        @property { string } [logo]
        
        @property { string } [created_on]
        
        @property { boolean } [is_active]
        
        @property { string } [search]
        
        @property { UserSerializer } [modified_by]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { number } [page_no]
        
        @property { string } [name]
        
         
    */

/**
        @typedef DepartmentsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */

/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef ProductTemplate
        
        
        @property { string } [modified_on]
        
        @property { string } slug
        
        @property { Array<string> } [departments]
        
        @property { Object } [created_by]
        
        @property { string } [logo]
        
        @property { string } [created_on]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_archived]
        
        @property { Array<string> } [attributes]
        
        @property { boolean } is_physical
        
        @property { Object } [modified_by]
        
        @property { string } [tag]
        
        @property { string } [description]
        
        @property { Array<string> } [categories]
        
        @property { string } [name]
        
         
    */

/**
        @typedef TemplatesResponse
        
        
        @property { Page } [page]
        
        @property { ProductTemplate } [items]
        
         
    */

/**
        @typedef TemplateDetails
        
        
        @property { string } [id]
        
        @property { string } slug
        
        @property { Array<string> } [departments]
        
        @property { string } [logo]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_archived]
        
        @property { Array<string> } [attributes]
        
        @property { boolean } is_physical
        
        @property { string } [tag]
        
        @property { string } [description]
        
        @property { Array<string> } [categories]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Properties
        
        
        @property { Object } [slug]
        
        @property { Object } [tags]
        
        @property { Object } [trader]
        
        @property { Object } [item_code]
        
        @property { Object } [moq]
        
        @property { Object } [size_guide]
        
        @property { Object } [item_type]
        
        @property { Object } [is_dependent]
        
        @property { Object } [category_slug]
        
        @property { Object } [hsn_code]
        
        @property { Object } [short_description]
        
        @property { Object } [multi_size]
        
        @property { Object } [media]
        
        @property { Object } [command]
        
        @property { Object } [description]
        
        @property { Object } [product_publish]
        
        @property { Object } [country_of_origin]
        
        @property { Object } [brand_uid]
        
        @property { Object } [sizes]
        
        @property { Object } [no_of_boxes]
        
        @property { Object } [variants]
        
        @property { Object } [product_group_tag]
        
        @property { Object } [custom_order]
        
        @property { Object } [return_config]
        
        @property { Object } [is_active]
        
        @property { Object } [highlights]
        
        @property { Object } [teaser_tag]
        
        @property { Object } [trader_type]
        
        @property { Object } [currency]
        
        @property { Object } [name]
        
         
    */

/**
        @typedef GlobalValidation
        
        
        @property { Array<string> } [required]
        
        @property { Properties } [properties]
        
        @property { string } [type]
        
        @property { Object } [definitions]
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */

/**
        @typedef TemplateValidationData
        
        
        @property { Object } [template_validation]
        
        @property { GlobalValidation } [global_validation]
        
         
    */

/**
        @typedef TemplatesValidationResponse
        
        
        @property { TemplateDetails } [template_details]
        
        @property { TemplateValidationData } [data]
        
         
    */

/**
        @typedef InventoryValidationResponse
        
        
        @property { Object } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef HSNData
        
        
        @property { Array<string> } [country_of_origin]
        
        @property { Array<string> } [hsn_code]
        
         
    */

/**
        @typedef HSNCodesResponse
        
        
        @property { HSNData } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef VerifiedBy
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef ProductDownloadItemsData
        
        
        @property { string } [type]
        
        @property { Array<string> } [templates]
        
        @property { Array<string> } [brand]
        
         
    */

/**
        @typedef ProductDownloadsItems
        
        
        @property { VerifiedBy } [created_by]
        
        @property { ProductDownloadItemsData } [data]
        
        @property { string } [completed_on]
        
        @property { string } [trigger_on]
        
        @property { number } [seller_id]
        
        @property { string } [status]
        
        @property { string } [url]
        
        @property { string } [id]
        
        @property { string } [task_id]
        
        @property { Object } [template_tags]
        
         
    */

/**
        @typedef ProductDownloadsResponse
        
        
        @property { Page } [page]
        
        @property { ProductDownloadsItems } [items]
        
         
    */

/**
        @typedef ProductConfigurationDownloads
        
        
        @property { Array<Object> } [data]
        
        @property { boolean } [multivalue]
        
         
    */

/**
        @typedef Hierarchy
        
        
        @property { number } department
        
        @property { number } l2
        
        @property { number } l1
        
         
    */

/**
        @typedef Media2
        
        
        @property { string } logo
        
        @property { string } landscape
        
        @property { string } portrait
        
         
    */

/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalog_id]
        
         
    */

/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [google]
        
         
    */

/**
        @typedef Category
        
        
        @property { string } [modified_on]
        
        @property { Array<number> } departments
        
        @property { string } [slug]
        
        @property { Object } [created_by]
        
        @property { string } [_id]
        
        @property { number } level
        
        @property { string } [created_on]
        
        @property { boolean } is_active
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Media2 } [media]
        
        @property { number } [uid]
        
        @property { Array<string> } [tryouts]
        
        @property { Object } [modified_by]
        
        @property { Array<string> } [synonyms]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } [priority]
        
        @property { string } name
        
         
    */

/**
        @typedef CategoryResponse
        
        
        @property { Page } [page]
        
        @property { Array<Category> } [items]
        
         
    */

/**
        @typedef CategoryRequestBody
        
        
        @property { Array<number> } departments
        
        @property { string } [slug]
        
        @property { number } level
        
        @property { boolean } is_active
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Media2 } [media]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<string> } [synonyms]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } [priority]
        
        @property { string } name
        
         
    */

/**
        @typedef CategoryCreateResponse
        
        
        @property { number } [uid]
        
        @property { string } [message]
        
         
    */

/**
        @typedef CategoryUpdateResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef SingleCategoryResponse
        
        
        @property { Category } [data]
        
         
    */

/**
        @typedef UserCommon
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef Attributes
        
        
        @property { string } [pattern]
        
        @property { string } [product_fit]
        
        @property { string } [verified_on]
        
        @property { string } [neck_type]
        
        @property { string } [stage]
        
        @property { Array<string> } [gender]
        
        @property { string } [sleeve_length]
        
        @property { string } [created_on]
        
        @property { string } [primary_color]
        
        @property { string } [color]
        
        @property { string } [modified_on]
        
        @property { UserCommon } [created_by]
        
        @property { string } [meta_nature]
        
        @property { string } [essential]
        
        @property { string } [material]
        
        @property { boolean } [is_image_less_product]
        
        @property { VerifiedBy } [verified_by]
        
        @property { string } [primary_material]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [image_nature]
        
        @property { Array<string> } [l3_mapping]
        
         
    */

/**
        @typedef ImageObject
        
        
        @property { string } [aspect_ratio]
        
        @property { number } [aspect_ratio_f]
        
        @property { string } [secure_url]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ProductPublished
        
        
        @property { boolean } [is_set]
        
        @property { number } [product_online_date]
        
         
    */

/**
        @typedef Logo
        
        
        @property { string } [aspect_ratio]
        
        @property { number } [aspect_ratio_f]
        
        @property { string } [secure_url]
        
        @property { string } [url]
        
         
    */

/**
        @typedef Brand
        
        
        @property { Logo } [logo]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Product
        
        
        @property { string } [slug]
        
        @property { Array<number> } [departments]
        
        @property { string } [item_code]
        
        @property { string } [size_guide]
        
        @property { Attributes } [attributes]
        
        @property { string } [item_type]
        
        @property { boolean } [is_dependent]
        
        @property { number } [company_id]
        
        @property { string } [category_slug]
        
        @property { string } [hsn_code]
        
        @property { Array<ImageObject> } [images]
        
        @property { boolean } [multi_size]
        
        @property { Array<Media1> } [media]
        
        @property { string } [template_tag]
        
        @property { string } [description]
        
        @property { Array<string> } [all_sizes]
        
        @property { ProductPublished } [product_publish]
        
        @property { string } [country_of_origin]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [status]
        
        @property { boolean } [is_set]
        
        @property { boolean } [is_active]
        
        @property { string } [highlights]
        
        @property { string } [currency]
        
        @property { number } [uid]
        
        @property { string } [id]
        
        @property { Brand } [brand]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<Product> } [items]
        
         
    */

/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */

/**
        @typedef OrderQuantity
        
        
        @property { number } [minimum]
        
        @property { number } [maximum]
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef ProductPublish
        
        
        @property { boolean } [is_set]
        
        @property { string } [product_online_date]
        
         
    */

/**
        @typedef CustomOrder
        
        
        @property { number } [manufacturing_time]
        
        @property { boolean } [is_custom_order]
        
        @property { string } [manufacturing_time_unit]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */

/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ProductCreateUpdate
        
        
        @property { string } slug
        
        @property { Array<number> } departments
        
        @property { Array<string> } [tags]
        
        @property { Trader } [trader]
        
        @property { Object } [_custom_json]
        
        @property { string } item_code
        
        @property { OrderQuantity } [moq]
        
        @property { string } [size_guide]
        
        @property { string } item_type
        
        @property { string } category_slug
        
        @property { number } company_id
        
        @property { string } [requester]
        
        @property { boolean } [is_dependent]
        
        @property { string } hsn_code
        
        @property { string } [short_description]
        
        @property { boolean } [multi_size]
        
        @property { Array<Media1> } [media]
        
        @property { string } [description]
        
        @property { string } template_tag
        
        @property { boolean } [is_image_less_product]
        
        @property { ProductPublish } [product_publish]
        
        @property { number } brand_uid
        
        @property { string } country_of_origin
        
        @property { Array<string> } [product_group_tag]
        
        @property { number } [no_of_boxes]
        
        @property { Object } [variants]
        
        @property { boolean } [is_set]
        
        @property { CustomOrder } [custom_order]
        
        @property { ReturnConfig } [return_config]
        
        @property { string } [change_request_id]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [highlights]
        
        @property { TeaserTag } [teaser_tag]
        
        @property { string } [trader_type]
        
        @property { string } currency
        
        @property { number } [uid]
        
        @property { string } name
        
         
    */

/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */

/**
        @typedef UserDetail
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
        @property { string } [full_name]
        
         
    */

/**
        @typedef ProductBulkRequest
        
        
        @property { string } [modified_on]
        
        @property { UserDetail } [created_by]
        
        @property { Array<string> } [cancelled_records]
        
        @property { number } [failed]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [created_on]
        
        @property { boolean } [is_active]
        
        @property { ProductTemplate } [template]
        
        @property { string } [file_path]
        
        @property { number } [total]
        
        @property { number } [succeed]
        
        @property { UserDetail } [modified_by]
        
        @property { string } [stage]
        
        @property { string } [template_tag]
        
        @property { number } [cancelled]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef ProductBulkRequestList
        
        
        @property { Page } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */

/**
        @typedef UserInfo1
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
        @property { string } [email]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef BulkJob
        
        
        @property { string } [modified_on]
        
        @property { UserInfo1 } [created_by]
        
        @property { Array<Object> } [cancelled_records]
        
        @property { number } [failed]
        
        @property { Array<Object> } [failed_records]
        
        @property { string } created_on
        
        @property { boolean } [is_active]
        
        @property { string } [file_path]
        
        @property { number } total
        
        @property { string } [tracking_url]
        
        @property { number } [succeed]
        
        @property { UserInfo1 } [modified_by]
        
        @property { string } [stage]
        
        @property { number } [cancelled]
        
        @property { string } [template_tag]
        
        @property { string } [custom_template_tag]
        
        @property { number } company_id
        
         
    */

/**
        @typedef BulkProductRequest
        
        
        @property { string } batch_id
        
        @property { string } template_tag
        
        @property { Array<Object> } data
        
        @property { number } company_id
        
         
    */

/**
        @typedef NestedTags
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef ProductTagsViewResponse
        
        
        @property { NestedTags } [items]
        
         
    */

/**
        @typedef Items
        
        
        @property { string } [modified_on]
        
        @property { UserCommon } [created_by]
        
        @property { Array<string> } [cancelled_records]
        
        @property { number } [failed]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [created_on]
        
        @property { boolean } [is_active]
        
        @property { string } [file_path]
        
        @property { number } [retry]
        
        @property { number } [total]
        
        @property { string } [tracking_url]
        
        @property { number } [succeed]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [id]
        
        @property { string } [stage]
        
        @property { number } [cancelled]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef BulkAssetResponse
        
        
        @property { Page } [page]
        
        @property { Array<Items> } [items]
        
         
    */

/**
        @typedef ProductBulkAssets
        
        
        @property { Object } user
        
        @property { number } [company_id]
        
        @property { string } url
        
         
    */

/**
        @typedef ProductSizeDeleteDataResponse
        
        
        @property { string } [size]
        
        @property { number } [item_id]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef ProductSizeDeleteResponse
        
        
        @property { boolean } [success]
        
        @property { ProductSizeDeleteDataResponse } [data]
        
         
    */

/**
        @typedef InventoryResponse
        
        
        @property { number } [item_id]
        
        @property { string } [size]
        
        @property { Object } [identifiers]
        
        @property { Object } [store]
        
        @property { number } [sellable_quantity]
        
        @property { number } [price]
        
        @property { number } [price_transfer]
        
        @property { string } [currency]
        
        @property { string } [uid]
        
        @property { string } [inventory_updated_on]
        
        @property { number } [price_effective]
        
        @property { number } [quantity]
        
        @property { number } [seller_identifier]
        
         
    */

/**
        @typedef ItemQuery
        
        
        @property { number } [brand_uid]
        
        @property { number } [uid]
        
        @property { string } [item_code]
        
         
    */

/**
        @typedef GTIN
        
        
        @property { boolean } [primary]
        
        @property { string } gtin_value
        
        @property { string } gtin_type
        
         
    */

/**
        @typedef SetSize
        
        
        @property { string } size
        
        @property { number } pieces
        
         
    */

/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */

/**
        @typedef InventorySet
        
        
        @property { number } [quantity]
        
        @property { SizeDistribution } size_distribution
        
         
    */

/**
        @typedef InvSize
        
        
        @property { number } [item_height]
        
        @property { string } size
        
        @property { number } [item_length]
        
        @property { Array<GTIN> } identifiers
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { InventorySet } [set]
        
        @property { number } price
        
        @property { number } [price_transfer]
        
        @property { string } store_code
        
        @property { boolean } [is_set]
        
        @property { string } currency
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } price_effective
        
        @property { number } [item_weight]
        
        @property { number } quantity
        
        @property { number } [item_width]
        
         
    */

/**
        @typedef InventoryRequest
        
        
        @property { ItemQuery } item
        
        @property { Array<InvSize> } sizes
        
        @property { number } company_id
        
         
    */

/**
        @typedef InventoryDeleteData
        
        
        @property { string } [size]
        
        @property { number } [item_id]
        
        @property { number } [location_id]
        
         
    */

/**
        @typedef InventoryDelete
        
        
        @property { boolean } [success]
        
        @property { InventoryDeleteData } [data]
        
         
    */

/**
        @typedef BulkInventoryGetItems
        
        
        @property { string } [modified_on]
        
        @property { Object } [created_by]
        
        @property { Array<string> } [cancelled_records]
        
        @property { number } [failed]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [created_on]
        
        @property { boolean } [is_active]
        
        @property { string } [file_path]
        
        @property { number } [total]
        
        @property { number } [succeed]
        
        @property { Object } [modified_by]
        
        @property { string } [stage]
        
        @property { string } [id]
        
        @property { number } [cancelled]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef BulkInventoryGet
        
        
        @property { Page } [page]
        
        @property { Array<BulkInventoryGetItems> } [items]
        
         
    */

/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */

/**
        @typedef Size1
        
        
        @property { number } [item_height]
        
        @property { string } [size]
        
        @property { number } [item_length]
        
        @property { Array<Object> } [identifiers]
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { InventorySet } [set]
        
        @property { number } price
        
        @property { number } [price_transfer]
        
        @property { string } store_code
        
        @property { boolean } [is_set]
        
        @property { string } currency
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } price_effective
        
        @property { number } [item_weight]
        
        @property { number } quantity
        
        @property { number } [item_width]
        
        @property { string } seller_identifier
        
         
    */

/**
        @typedef InventoryBulkRequest
        
        
        @property { string } batch_id
        
        @property { Object } [user]
        
        @property { Array<Size1> } sizes
        
        @property { number } company_id
        
         
    */

/**
        @typedef InventoryExportJob
        
        
        @property { Object } [request_params]
        
        @property { string } [completed_on]
        
        @property { number } seller_id
        
        @property { string } [trigger_on]
        
        @property { string } [status]
        
        @property { string } [url]
        
        @property { string } task_id
        
         
    */

/**
        @typedef InventoryExportRequest
        
        
        @property { string } [type]
        
        @property { Array<number> } [store]
        
        @property { Array<number> } [brand]
        
         
    */

/**
        @typedef FilerList
        
        
        @property { string } [value]
        
        @property { string } [display]
        
         
    */

/**
        @typedef InventoryConfig
        
        
        @property { Array<FilerList> } [data]
        
        @property { boolean } [multivalues]
        
         
    */

/**
        @typedef PageResponse
        
        
        @property { number } [size]
        
        @property { boolean } [has_previous]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { string } [current]
        
         
    */

/**
        @typedef HsnCodesObject
        
        
        @property { number } [threshold1]
        
        @property { string } [hs2_code]
        
        @property { string } [modified_on]
        
        @property { number } [threshold2]
        
        @property { string } [hsn_code]
        
        @property { boolean } [tax_on_mrp]
        
        @property { boolean } [tax_on_esp]
        
        @property { number } [tax2]
        
        @property { string } [id]
        
        @property { number } [company_id]
        
        @property { number } [tax1]
        
         
    */

/**
        @typedef HsnCodesListingResponse
        
        
        @property { PageResponse } [page]
        
        @property { Array<HsnCodesObject> } [items]
        
         
    */

/**
        @typedef HsnUpsert
        
        
        @property { number } threshold1
        
        @property { string } hs2_code
        
        @property { number } [threshold2]
        
        @property { string } hsn_code
        
        @property { boolean } tax_on_mrp
        
        @property { boolean } [tax_on_esp]
        
        @property { number } [uid]
        
        @property { number } [tax2]
        
        @property { number } company_id
        
        @property { number } tax1
        
         
    */

/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
    */

/**
        @typedef BulkHsnUpsert
        
        
        @property { Array<HsnUpsert> } data
        
         
    */

/**
        @typedef BulkHsnResponse
        
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef BrandItem
        
        
        @property { Array<string> } [departments]
        
        @property { string } [slug]
        
        @property { string } [discount]
        
        @property { Media } [logo]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BrandListingResponse
        
        
        @property { Page } page
        
        @property { Array<BrandItem> } [items]
        
         
    */

/**
        @typedef Department
        
        
        @property { string } [slug]
        
        @property { number } [priority_order]
        
        @property { Media } [logo]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */

/**
        @typedef DepartmentIdentifier
        
        
        @property { string } [slug]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef ThirdLevelChild
        
        
        @property { string } [slug]
        
        @property { Object } [_custom_json]
        
        @property { Array<Object> } [childs]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
         
    */

/**
        @typedef SecondLevelChild
        
        
        @property { string } [slug]
        
        @property { Object } [_custom_json]
        
        @property { Array<ThirdLevelChild> } [childs]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Child
        
        
        @property { string } [slug]
        
        @property { Object } [_custom_json]
        
        @property { Array<SecondLevelChild> } [childs]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CategoryItems
        
        
        @property { string } [slug]
        
        @property { Array<Child> } [childs]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
         
    */

/**
        @typedef DepartmentCategoryTree
        
        
        @property { string } [department]
        
        @property { Array<CategoryItems> } [items]
        
         
    */

/**
        @typedef CategoryListingResponse
        
        
        @property { Array<DepartmentIdentifier> } [departments]
        
        @property { Array<DepartmentCategoryTree> } [data]
        
         
    */

/**
        @typedef ApplicationProductListingResponse
        
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Page } page
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */

/**
        @typedef ProductDetail
        
        
        @property { string } slug
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
        @property { string } [item_code]
        
        @property { Object } [attributes]
        
        @property { number } [rating]
        
        @property { string } [item_type]
        
        @property { Object } [promo_meta]
        
        @property { Array<string> } [similars]
        
        @property { string } [short_description]
        
        @property { number } [rating_count]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [color]
        
        @property { string } [description]
        
        @property { string } [product_online_date]
        
        @property { string } [image_nature]
        
        @property { Array<string> } [highlights]
        
        @property { Object } [teaser_tag]
        
        @property { boolean } [has_variant]
        
        @property { string } [type]
        
        @property { number } [uid]
        
        @property { Array<string> } [tryouts]
        
        @property { ProductBrand } [brand]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referral_code]
        
         
    */

/**
        @typedef Document
        
        
        @property { string } [url]
        
        @property { boolean } [verified]
        
        @property { string } value
        
        @property { string } legal_name
        
        @property { string } type
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { string } [address2]
        
        @property { string } [landmark]
        
        @property { string } address1
        
        @property { string } [country_code]
        
        @property { number } pincode
        
        @property { number } latitude
        
        @property { number } longitude
        
        @property { string } state
        
        @property { string } city
        
        @property { string } country
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country_code]
        
        @property { string } [country]
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { ReferralInfo } [referral_info]
        
        @property { Array<number> } brands
        
        @property { Document } document
        
        @property { Array<string> } [notification_emails]
        
        @property { CompanyAddress } address
        
        @property { string } name
        
        @property { Object } [warnings]
        
        @property { BusinessCountryInfo } business_country_info
        
        @property { string } business_type
        
        @property { number } [uid]
        
        @property { boolean } [franchise_enabled]
        
        @property { string } [business_info]
        
         
    */

/**
        @typedef SellerPhoneNumber
        
        
        @property { number } country_code
        
        @property { string } number
        
         
    */

/**
        @typedef ContactDetails
        
        
        @property { Array<string> } [emails]
        
        @property { Array<SellerPhoneNumber> } [phone]
        
         
    */

/**
        @typedef GetAddressSerializer
        
        
        @property { string } [address_type]
        
        @property { string } [address2]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [country_code]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [country]
        
         
    */

/**
        @typedef Website
        
        
        @property { string } [url]
        
         
    */

/**
        @typedef BusinessDetails
        
        
        @property { Website } [website]
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country_code]
        
        @property { string } [country]
        
         
    */

/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { Array<string> } [notification_emails]
        
        @property { boolean } [franchise_enabled]
        
        @property { ContactDetails } [contact_details]
        
        @property { Array<Document> } [documents]
        
        @property { string } [name]
        
        @property { Object } [warnings]
        
        @property { string } [created_on]
        
        @property { UserSerializer } [verified_by]
        
        @property { string } business_type
        
        @property { string } [business_info]
        
        @property { string } [verified_on]
        
        @property { UserSerializer } [created_by]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
        @property { string } company_type
        
        @property { number } uid
        
        @property { BusinessDetails } [business_details]
        
        @property { string } [modified_on]
        
        @property { BusinessCountryInfo1 } [business_country_info]
        
        @property { UserSerializer } [modified_by]
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [brand]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [store_documents]
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [company_documents]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { string } [verified_on]
        
        @property { Object } [_locale_language]
        
        @property { UserSerializer1 } [created_by]
        
        @property { string } [description]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [reject_reason]
        
        @property { string } [modified_on]
        
        @property { string } [stage]
        
        @property { string } name
        
        @property { Object } [_custom_json]
        
        @property { Object } [warnings]
        
        @property { string } [created_on]
        
        @property { string } [slug_key]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { number } [uid]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { number } [company_id]
        
        @property { Object } [_locale_language]
        
        @property { string } [description]
        
        @property { string } [brand_tier]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { Object } [_custom_json]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { number } [uid]
        
        @property { string } logo
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } [uid]
        
        @property { number } company
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { string } [verified_on]
        
        @property { UserSerializer } [created_by]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [reject_reason]
        
        @property { string } [modified_on]
        
        @property { string } [company_type]
        
        @property { string } [stage]
        
        @property { string } [name]
        
        @property { string } [created_on]
        
        @property { UserSerializer } [verified_by]
        
        @property { string } [business_type]
        
        @property { UserSerializer } [modified_by]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CompanyBrandSerializer
        
        
        @property { string } [verified_on]
        
        @property { GetCompanySerializer } [company]
        
        @property { UserSerializer1 } [created_by]
        
        @property { GetBrandResponseSerializer } [brand]
        
        @property { string } [reject_reason]
        
        @property { string } [modified_on]
        
        @property { string } [stage]
        
        @property { Object } [warnings]
        
        @property { string } [created_on]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<CompanyBrandSerializer> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { boolean } [enabled]
        
        @property { string } [username]
        
        @property { string } [password]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [e_invoice]
        
        @property { InvoiceCredSerializer } [e_waybill]
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [address_type]
        
        @property { string } [address2]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [country_code]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [country]
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [closing]
        
        @property { boolean } open
        
        @property { LocationTimingSerializer } [opening]
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { SellerPhoneNumber } mobile_no
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [store_uid]
        
        @property { boolean } [on_same_store]
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { number } company
        
        @property { string } [store_type]
        
        @property { string } code
        
        @property { string } [stage]
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
        @property { GetAddressSerializer1 } address
        
        @property { string } name
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { Array<Document> } [documents]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Object } [_custom_json]
        
        @property { Object } [warnings]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } display_name
        
        @property { number } [uid]
        
        @property { Array<string> } [notification_emails]
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { GetCompanySerializer } [company]
        
        @property { string } [store_type]
        
        @property { string } phone_number
        
        @property { string } code
        
        @property { LocationIntegrationType } [integration_type]
        
        @property { Array<string> } [notification_emails]
        
        @property { string } name
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Object } [_custom_json]
        
        @property { string } [created_on]
        
        @property { Array<Document> } [documents]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Object } [warnings]
        
        @property { string } [verified_on]
        
        @property { UserSerializer1 } [created_by]
        
        @property { string } [stage]
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
        @property { string } display_name
        
        @property { number } [uid]
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
        @property { string } [modified_on]
        
        @property { GetAddressSerializer } address
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { UserSerializer1 } [modified_by]
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Array<GetLocationSerializer> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef BulkLocationSerializer
        
        
        @property { Array<LocationSerializer> } [data]
        
         
    */

/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */

/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */

/**
        @typedef StartResponse
        
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef StartRequest
        
        
        @property { string } file_name
        
        @property { string } content_type
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
        @property { Object } [params]
        
         
    */

/**
        @typedef CompleteResponse
        
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
    */

/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */

/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attempts_made
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finished_on
        
        @property { number } processed_on
        
         
    */

/**
        @typedef BulkResponse
        
        
        @property { string } tracking_url
        
        @property { CopyFileTask } task
        
         
    */

/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */

/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */

/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signed_url
        
        @property { number } expiry
        
         
    */

/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */

/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */

/**
        @typedef DbRecord
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } content_type
        
        @property { string } file_path
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
    */

/**
        @typedef BrowseResponse
        
        
        @property { Array<DbRecord> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef RedirectDevice
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */

/**
        @typedef WebRedirect
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { WebRedirect } [web]
        
        @property { boolean } [force_web]
        
         
    */

/**
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
    */

/**
        @typedef Attribution
        
        
        @property { string } [campaign_cookie_expiry]
        
         
    */

/**
        @typedef SocialMediaTags
        
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [image]
        
         
    */

/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { boolean } [active]
        
        @property { string } [expire_at]
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
        @property { number } [count]
        
         
    */

/**
        @typedef UrlInfo
        
        
        @property { string } [original]
        
        @property { string } [short]
        
        @property { string } [hash]
        
         
    */

/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { UrlInfo } [url]
        
        @property { string } [created_by]
        
        @property { boolean } [app_redirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [_id]
        
        @property { boolean } [enable_tracking]
        
        @property { string } [expire_at]
        
        @property { string } [application]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
        @property { number } [count]
        
         
    */

/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ErrorRes
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef DataTresholdDTO
        
        
        @property { number } [min_price]
        
        @property { number } [safe_stock]
        
        @property { number } [period_threshold]
        
        @property { string } [period_threshold_type]
        
        @property { Array<GenericDTO> } [period_type_list]
        
         
    */

/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integration_data]
        
        @property { string } [company_name]
        
        @property { number } company_id
        
        @property { TaskDTO } [task_details]
        
        @property { DataTresholdDTO } [threshold_details]
        
        @property { string } [job_code]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [group_list]
        
         
    */

/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [access_key]
        
        @property { string } [secret_key]
        
        @property { string } [local_file_path]
        
        @property { string } [archive_path]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zip_format]
        
        @property { string } [file_regex]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */

/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archive_dir]
        
         
    */

/**
        @typedef Audit
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [source_slug]
        
         
    */

/**
        @typedef CompanyConfig
        
        
        @property { number } [company_id]
        
        @property { Array<number> } [exclude_steps]
        
        @property { Array<string> } [hidden_closet_keys]
        
        @property { Object } [open_tags]
        
        @property { Array<string> } [tax_identifiers]
        
        @property { number } [delete_quantity_threshold]
        
         
    */

/**
        @typedef DBConfig
        
        
        @property { string } [vendor]
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [dbname]
        
        @property { string } [query]
        
        @property { boolean } [procedure]
        
        @property { string } [driver_class]
        
        @property { string } [jdbc_url]
        
        @property { Object } [optional_properties]
        
         
    */

/**
        @typedef DBConnectionProfile
        
        
        @property { string } [inventory]
        
         
    */

/**
        @typedef DBParamConfig
        
        
        @property { Object } [params]
        
         
    */

/**
        @typedef DefaultHeadersDTO
        
        
        @property { PropBeanDTO } [store]
        
        @property { PropBeanDTO } [intf_article_id]
        
        @property { PropBeanDTO } [price_effective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */

/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junk_data_threshold_count]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { string } [unwind_field]
        
        @property { DefaultHeadersDTO } [default_headers]
        
         
    */

/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [read_from_content]
        
        @property { boolean } [filter_based_on_recepients]
        
        @property { string } [pcol]
        
        @property { string } [subject_line_regex]
        
        @property { string } [sender_address]
        
        @property { string } [local_dir]
        
        @property { Array<string> } [folder_name_hierarchies]
        
        @property { string } [attachment_regex]
        
        @property { string } [body_content_regex]
        
        @property { boolean } [password_protected]
        
        @property { string } [zip_format]
        
        @property { boolean } [attachment_mandate]
        
        @property { boolean } [filter_files_after_extraction]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_unread_mails]
        
        @property { string } [content_type]
        
        @property { boolean } [downloadable_link]
        
        @property { Object } [properties]
        
         
    */

/**
        @typedef FTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [local_dir]
        
        @property { string } [remote_dir]
        
        @property { string } [zip_file_regex]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { boolean } [read_all_files]
        
         
    */

/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [file_has_header]
        
        @property { number } [header_index]
        
        @property { Array<string> } [header_array]
        
        @property { number } [data_start_index]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { number } [junk_data_threshold_count]
        
        @property { string } [file_type]
        
        @property { boolean } [line_validity_check]
        
        @property { Array<string> } [sheet_names]
        
        @property { boolean } [read_all_sheets]
        
        @property { string } [quote_char]
        
        @property { string } [escape_char]
        
        @property { DefaultHeadersDTO } [default_headers]
        
         
    */

/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheet_id]
        
        @property { string } [client_secret_location]
        
        @property { string } [cred_storage_directory]
        
        @property { string } [local_dir]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */

/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [request_params]
        
        @property { string } [http_method]
        
        @property { string } [request_payload]
        
        @property { string } [local_path]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */

/**
        @typedef JobConfig
        
        
        @property { number } [_id]
        
        @property { string } [job_code]
        
        @property { string } [task_type]
        
        @property { number } [sync_delay]
        
        @property { string } [cron_expression]
        
        @property { StoreFilter } [store_filter]
        
        @property { ProcessConfig } [process_config]
        
        @property { Array<StoreConfig> } [store_config]
        
        @property { Object } [properties]
        
        @property { boolean } [immediate_first_run]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependent_job_codes]
        
        @property { Array<CompanyConfig> } [company_config]
        
        @property { Array<number> } [company_ids]
        
        @property { Array<string> } [tax_identifiers]
        
        @property { string } [priority]
        
        @property { number } [period_threshold]
        
        @property { string } [period_threshold_type]
        
        @property { DBConnectionProfile } [db_connection_profile]
        
        @property { Object } [params]
        
        @property { Object } [open_tags]
        
        @property { number } [delete_quantity_threshold]
        
        @property { CatalogMasterConfig } [catalog_master_config]
        
        @property { Array<string> } [aggregator_types]
        
        @property { string } [integration_type]
        
        @property { number } [min_price]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } company_name
        
        @property { number } company_id
        
        @property { JobConfig } [data]
        
         
    */

/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
         
    */

/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [local_dir]
        
        @property { string } [working_dir]
        
        @property { boolean } [unzip]
        
        @property { string } [zip_file_regex]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_files]
        
         
    */

/**
        @typedef MongoDocConfig
        
        
        @property { string } [collection_name]
        
        @property { Object } [find_query]
        
        @property { Object } [projection_query]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { Array<Object> } [aggregate_pipeline]
        
        @property { boolean } [skip_save]
        
         
    */

/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumer_key]
        
        @property { string } [consumer_secret]
        
        @property { string } [token]
        
        @property { string } [token_secret]
        
        @property { string } [rest_url]
        
        @property { string } [rest_base_url]
        
        @property { string } [function_name]
        
         
    */

/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [db_config]
        
        @property { DBParamConfig } [db_param_config]
        
        @property { SFTPConfig } [sftp_config]
        
        @property { AWSS3config } [aws_s3_config]
        
        @property { MongoDocConfig } [mongo_doc_config]
        
        @property { FTPConfig } [ftp_config]
        
        @property { EmailConfig } [email_config]
        
        @property { FileConfig } [file_config]
        
        @property { JsonDocConfig } [json_doc_config]
        
        @property { DocMappingConfig } [doc_mapping_config]
        
        @property { TaskStepConfig } [task_step_config]
        
        @property { HttpConfig } [http_config]
        
        @property { LocalFileConfig } [local_file_config]
        
        @property { OAuthConfig } [oauth_config]
        
        @property { GoogleSpreadSheetConfig } [google_spreadsheet_config]
        
         
    */

/**
        @typedef PropBeanConfig
        
        
        @property { boolean } [required]
        
        @property { Object } [mapping]
        
        @property { boolean } [optional]
        
        @property { Send } [send]
        
        @property { Array<Object> } [validations]
        
        @property { Array<string> } [values]
        
        @property { boolean } [include]
        
        @property { string } [source_field]
        
        @property { Array<string> } [source_fields]
        
        @property { string } [destination_field]
        
        @property { string } [data_type]
        
        @property { Object } [default_value]
        
        @property { Object } [const_value]
        
        @property { string } [concat_str]
        
        @property { string } [function_name]
        
        @property { string } [transformer_name]
        
        @property { string } [all_param_function_name]
        
        @property { string } [sub_separator]
        
        @property { string } [index_field]
        
        @property { boolean } [ignore_if_not_exists]
        
        @property { string } [identifier_type]
        
        @property { Object } [projection_query]
        
        @property { boolean } [enrich_from_master]
        
         
    */

/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [source_field]
        
        @property { Array<string> } [source_fields]
        
        @property { string } [destination_field]
        
        @property { string } [data_type]
        
        @property { Object } [default_value]
        
        @property { Object } [const_value]
        
        @property { string } [concat_str]
        
        @property { string } [function_name]
        
        @property { string } [transformer_name]
        
        @property { string } [all_param_function_name]
        
        @property { string } [sub_separator]
        
        @property { string } [index_field]
        
        @property { boolean } [ignore_if_not_exists]
        
        @property { string } [identifier_type]
        
        @property { Object } [projection_query]
        
        @property { boolean } [enrich_from_master]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SFTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [private_key_path]
        
        @property { boolean } [strict_host_key_checking]
        
        @property { string } [local_dir]
        
        @property { string } [remote_dir]
        
        @property { boolean } [password_protected]
        
        @property { string } [zip_file_regex]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_files]
        
         
    */

/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */

/**
        @typedef StoreConfig
        
        
        @property { string } [job_code]
        
        @property { string } [storeid]
        
        @property { string } [store_alias]
        
        @property { string } [store_file_regex]
        
        @property { string } [store_file_name]
        
        @property { ProcessConfig } [process_config]
        
        @property { Object } [properties]
        
         
    */

/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [include_tags]
        
        @property { Array<string> } [exclude_tags]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [task_config_id]
        
        @property { Array<TaskParam> } [task_params]
        
         
    */

/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [task_configs]
        
        @property { Array<number> } [task_config_ids]
        
        @property { Array<number> } [task_config_group_ids]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modified_by]
        
        @property { string } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
        @property { boolean } [active]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigListDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [article_assignment]
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [comms_enabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [_id]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [modified_by]
        
         
    */

/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [out_of_stock]
        
        @property { boolean } [franchise_enabled]
        
        @property { Array<any> } [exclude_category]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [company_store]
        
         
    */

/**
        @typedef InventoryBrand
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [brands]
        
         
    */

/**
        @typedef InventoryStore
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [stores]
        
        @property { AppStoreRules } [rules]
        
         
    */

/**
        @typedef AppStoreRules
        
        
        @property { Array<number> } [companies]
        
        @property { Array<any> } [brands]
        
         
    */

/**
        @typedef InventoryCategory
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [categories]
        
         
    */

/**
        @typedef InventoryPrice
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef InventoryDiscount
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef AuthenticationConfig
        
        
        @property { boolean } [required]
        
        @property { string } [provider]
        
         
    */

/**
        @typedef ArticleAssignmentConfig
        
        
        @property { ArticleAssignmentRules } [rules]
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<any> } [enforced_stores]
        
         
    */

/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [store_priority]
        
         
    */

/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetype_order]
        
         
    */

/**
        @typedef RewardPointsConfig
        
        
        @property { Credit } [credit]
        
        @property { Debit } [debit]
        
         
    */

/**
        @typedef Credit
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef Debit
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
        @property { string } [strategy_channel]
        
         
    */

/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [delivery_charges]
        
        @property { boolean } [enabled]
        
        @property { number } [max_cart_items]
        
        @property { number } [min_cart_value]
        
        @property { boolean } [bulk_coupons]
        
         
    */

/**
        @typedef DeliveryCharges
        
        
        @property { boolean } [enabled]
        
        @property { Charges } [charges]
        
         
    */

/**
        @typedef Charges
        
        
        @property { number } [threshold]
        
        @property { number } [charges]
        
         
    */

/**
        @typedef AppPaymentConfig
        
        
        @property { CallbackUrl } [callback_url]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [payment_selection_lock]
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [cod_amount_limit]
        
        @property { number } [cod_charges]
        
         
    */

/**
        @typedef CallbackUrl
        
        
        @property { string } [app]
        
        @property { string } [web]
        
         
    */

/**
        @typedef Methods
        
        
        @property { PaymentModeConfig } [pl]
        
        @property { PaymentModeConfig } [card]
        
        @property { PaymentModeConfig } [nb]
        
        @property { PaymentModeConfig } [wl]
        
        @property { PaymentModeConfig } [ps]
        
        @property { PaymentModeConfig } [upi]
        
        @property { PaymentModeConfig } [qr]
        
        @property { PaymentModeConfig } [cod]
        
        @property { PaymentModeConfig } [pp]
        
        @property { PaymentModeConfig } [jp]
        
        @property { PaymentModeConfig } [pac]
        
        @property { PaymentModeConfig } [fc]
        
        @property { PaymentModeConfig } [jiopp]
        
        @property { PaymentModeConfig } [stripepg]
        
        @property { PaymentModeConfig } [juspaypg]
        
        @property { PaymentModeConfig } [payubizpg]
        
        @property { PaymentModeConfig } [payumoneypg]
        
        @property { PaymentModeConfig } [rupifipg]
        
        @property { PaymentModeConfig } [simpl]
        
         
    */

/**
        @typedef PaymentModeConfig
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef PaymentSelectionLock
        
        
        @property { boolean } [enabled]
        
        @property { string } [default_options]
        
        @property { string } [payment_identifier]
        
         
    */

/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [force_reassignment]
        
        @property { string } [message]
        
         
    */

/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logistics_by_seller]
        
        @property { boolean } [serviceability_check]
        
        @property { boolean } [same_day_delivery]
        
        @property { boolean } [dp_assignment]
        
         
    */

/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
         
    */

/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { boolean } [comms_enabled]
        
         
    */

/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [company_name]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */

/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [company_id]
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */

/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef BrandStoreInfo
        
        
        @property { string } [store_name]
        
        @property { number } [store_id]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { OptedStoreAddress } [store_address]
        
        @property { OptedCompany } [company]
        
         
    */

/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brand_logo_url]
        
        @property { string } [brand_banner_url]
        
        @property { string } [brand_banner_portrait_url]
        
         
    */

/**
        @typedef BrandsByCompanyResponse
        
        
        @property { CompanyBrandInfo } [brands]
        
         
    */

/**
        @typedef CreateApplicationRequest
        
        
        @property { App } [app]
        
        @property { AppInventory } [configuration]
        
        @property { AppDomain } [domain]
        
         
    */

/**
        @typedef CreateAppResponse
        
        
        @property { Application } [app]
        
        @property { ApplicationInventory } [configuration]
        
         
    */

/**
        @typedef ApplicationsResponse
        
        
        @property { Array<Application> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef MobileAppConfiguration
        
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { string } [package_name]
        
         
    */

/**
        @typedef LandingImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef SplashImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latest_available_version_name]
        
         
    */

/**
        @typedef BuildVersion
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [build_status]
        
        @property { string } [version_name]
        
        @property { number } [version_code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [_id]
        
        @property { Array<string> } [supported_currency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [default_currency]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */

/**
        @typedef CurrencyConfig
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef DomainAdd
        
        
        @property { string } [name]
        
         
    */

/**
        @typedef DomainAddRequest
        
        
        @property { DomainAdd } [domain]
        
         
    */

/**
        @typedef DomainsResponse
        
        
        @property { Array<Domain> } [domains]
        
         
    */

/**
        @typedef UpdateDomain
        
        
        @property { string } [_id]
        
         
    */

/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */

/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domain_url]
        
         
    */

/**
        @typedef DomainStatus
        
        
        @property { string } [display]
        
        @property { boolean } [status]
        
         
    */

/**
        @typedef DomainStatusResponse
        
        
        @property { boolean } [connected]
        
        @property { Array<DomainStatus> } [status]
        
         
    */

/**
        @typedef DomainSuggestionsRequest
        
        
        @property { string } [domain_url]
        
        @property { boolean } [custom]
        
         
    */

/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } is_available
        
        @property { number } [price]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef DomainSuggestionsResponse
        
        
        @property { Array<DomainSuggestion> } [domains]
        
         
    */

/**
        @typedef GetIntegrationsOptInsResponse
        
        
        @property { IntegrationOptIn } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef IntegrationOptIn
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Validators
        
        
        @property { CompanyValidator } [company]
        
        @property { StoreValidator } [store]
        
        @property { InventoryValidator } [inventory]
        
        @property { OrderValidator } [order]
        
         
    */

/**
        @typedef CompanyValidator
        
        
        @property { JsonSchema } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef JsonSchema
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [tooltip]
        
         
    */

/**
        @typedef StoreValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [is_public]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */

/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [other_opted]
        
        @property { IntegrationOptIn } [other_integration]
        
        @property { OtherEntity } [other_entity]
        
         
    */

/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */

/**
        @typedef OtherEntityData
        
        
        @property { string } [article_identifier]
        
         
    */

/**
        @typedef App
        
        
        @property { string } [company_id]
        
        @property { string } [channel_type]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */

/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchise_enabled]
        
        @property { boolean } [out_of_stock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [article_assignment]
        
         
    */

/**
        @typedef AppDomain
        
        
        @property { string } [name]
        
         
    */

/**
        @typedef CompaniesResponse
        
        
        @property { AppInventoryCompanies } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AppInventoryCompanies
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [company_type]
        
         
    */

/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AppInventoryStores
        
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [all_stores]
        
        @property { Array<number> } [deployed_stores]
        
        @property { string } [q]
        
         
    */

/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deployment_meta]
        
         
    */

/**
        @typedef OtherSellerCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OtherSellerApplication
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [opt_type]
        
         
    */

/**
        @typedef OtherSellerApplications
        
        
        @property { Array<OtherSellerApplication> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef OptedApplicationResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [opted_inventory]
        
        @property { OptOutInventory } [opt_out_inventory]
        
         
    */

/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OptedInventory
        
        
        @property { OptType } [opt_type]
        
        @property { any } [items]
        
         
    */

/**
        @typedef OptType
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */

/**
        @typedef OptedStore
        
        
        @property { string } [name]
        
        @property { string } [store_code]
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */

/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [seller_selection]
        
        @property { boolean } [update_product_meta]
        
        @property { boolean } [request_product]
        
         
    */

/**
        @typedef LaunchPage
        
        
        @property { string } [page_type]
        
        @property { Object } [params]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launch_page]
        
        @property { boolean } [continue_as_guest]
        
        @property { string } [login_btn_text]
        
        @property { boolean } [show_domain_textbox]
        
        @property { boolean } [show_register_btn]
        
         
    */

/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [ask_store_address]
        
         
    */

/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [product_detail]
        
        @property { LandingPageFeature } [landing_page]
        
        @property { RegistrationPageFeature } [registration_page]
        
        @property { HomePageFeature } [home_page]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef HomePageFeature
        
        
        @property { boolean } [order_processing]
        
         
    */

/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communication_optin_dialog]
        
        @property { DeploymentStoreSelectionFeature } [deployment_store_selection]
        
        @property { ListingPriceFeature } [listing_price]
        
        @property { ListingPageFeature } [listing_page]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenue_engine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compare_products]
        
         
    */

/**
        @typedef CommunicationOptinDialogFeature
        
        
        @property { boolean } [visibility]
        
         
    */

/**
        @typedef DeploymentStoreSelectionFeature
        
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ListingPriceFeature
        
        
        @property { string } [value]
        
        @property { string } [sort]
        
         
    */

/**
        @typedef ListingPageFeature
        
        
        @property { string } [sort_on]
        
         
    */

/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [default_currency]
        
         
    */

/**
        @typedef RevenueEngineFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FeedbackFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef CompareProductsFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef CartFeature
        
        
        @property { boolean } [gst_input]
        
        @property { boolean } [staff_selection]
        
        @property { boolean } [placing_for_customer]
        
        @property { boolean } [google_map]
        
         
    */

/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */

/**
        @typedef PcrFeature
        
        
        @property { boolean } [staff_selection]
        
         
    */

/**
        @typedef OrderFeature
        
        
        @property { boolean } [buy_again]
        
         
    */

/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef Currency
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [is_primary]
        
        @property { boolean } [is_default]
        
        @property { boolean } [is_shortlink]
        
        @property { string } [_id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */

/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirect_to]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SecureUrl
        
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channel_type]
        
        @property { number } [cache_ttl]
        
        @property { boolean } [is_internal]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [company_id]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [app_type]
        
        @property { SecureUrl } [mobile_logo]
        
        @property { Domain } [domain]
        
         
    */

/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InvalidPayloadRequest
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */

/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
         
    */

/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetype_order]
        
         
    */

/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [store_priority]
        
         
    */

/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<number> } [enforced_stores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */

/**
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [address_type]
        
         
    */

/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */

/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [country_code]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [social_links]
        
        @property { Links } [links]
        
        @property { string } [copyright_text]
        
        @property { string } [_id]
        
        @property { BusinessHighlights } [business_highlights]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [address_line]
        
        @property { InformationPhone } [phone]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
         
    */

/**
        @typedef InformationPhone
        
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */

/**
        @typedef InformationSupport
        
        
        @property { Array<string> } [phone]
        
        @property { Array<string> } [email]
        
        @property { string } [timing]
        
         
    */

/**
        @typedef SocialLinks
        
        
        @property { Facebook } [facebook]
        
        @property { Instagram } [instagram]
        
        @property { Twitter } [twitter]
        
        @property { Pinterest } [pinterest]
        
        @property { GooglePlus } [google_plus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linked_in]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blog_link]
        
         
    */

/**
        @typedef Instagram
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Twitter
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Pinterest
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef GooglePlus
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Youtube
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef LinkedIn
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Vimeo
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef BlogLink
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Links
        
        
        @property { string } [title]
        
        @property { string } [link]
        
         
    */

/**
        @typedef BusinessHighlights
        
        
        @property { string } [_id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [sub_title]
        
         
    */

/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobile_logo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */

/**
        @typedef StoreLatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */

/**
        @typedef OptedStoreAddress
        
        
        @property { string } [state]
        
        @property { string } [address1]
        
        @property { StoreLatLong } [lat_long]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */

/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [_id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */

/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fynd_rewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [google_map]
        
         
    */

/**
        @typedef Firebase
        
        
        @property { Credentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef Credentials
        
        
        @property { Ios } [ios]
        
        @property { Android } [android]
        
        @property { string } [project_id]
        
        @property { string } [gcm_sender_id]
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Ios
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Android
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef MoengageCredentials
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SegmentCredentials
        
        
        @property { string } [write_key]
        
         
    */

/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef GtmCredentials
        
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FreshchatCredentials
        
        
        @property { string } [app_id]
        
        @property { string } [app_key]
        
        @property { string } [web_token]
        
         
    */

/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SafetynetCredentials
        
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */

/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [public_key]
        
         
    */

/**
        @typedef Auth
        
        
        @property { Google } [google]
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountkit]
        
         
    */

/**
        @typedef GoogleMap
        
        
        @property { GoogleMapCredentials } [credentials]
        
         
    */

/**
        @typedef GoogleMapCredentials
        
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef CouponSchedule
        
        
        @property { Array<Object> } [next_schedule]
        
        @property { string } [cron]
        
        @property { number } [duration]
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef Identifier
        
        
        @property { Array<string> } [article_id]
        
        @property { Array<number> } [brand_id]
        
        @property { Array<string> } [collection_id]
        
        @property { Array<number> } [company_id]
        
        @property { Array<number> } [item_id]
        
        @property { Array<string> } [user_id]
        
        @property { Array<number> } [category_id]
        
        @property { Array<number> } [store_id]
        
         
    */

/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */

/**
        @typedef CouponDateMeta
        
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
         
    */

/**
        @typedef CouponAuthor
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
         
    */

/**
        @typedef State
        
        
        @property { boolean } [is_display]
        
        @property { boolean } [is_public]
        
        @property { boolean } [is_archived]
        
         
    */

/**
        @typedef Validation
        
        
        @property { Array<string> } [app_id]
        
        @property { string } [user_registered_after]
        
        @property { boolean } [anonymous]
        
         
    */

/**
        @typedef CouponAction
        
        
        @property { string } [action_date]
        
        @property { string } [txn_mode]
        
         
    */

/**
        @typedef UsesRemaining
        
        
        @property { number } [total]
        
        @property { number } [app]
        
        @property { number } [user]
        
         
    */

/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [remaining]
        
        @property { UsesRemaining } [maximum]
        
         
    */

/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellation_allowed]
        
        @property { boolean } [return_allowed]
        
         
    */

/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */

/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [types]
        
        @property { Array<string> } [networks]
        
        @property { Array<string> } [codes]
        
        @property { PaymentAllowValue } [uses]
        
         
    */

/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [nb]
        
         
    */

/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multi_store_allowed
        
         
    */

/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef Restrictions
        
        
        @property { boolean } [coupon_allowed]
        
        @property { UsesRestriction } [uses]
        
        @property { PostOrder } [post_order]
        
        @property { PaymentCodes } [payments]
        
        @property { BulkBundleRestriction } [bulk_bundle]
        
        @property { Array<string> } [platforms]
        
        @property { PriceRange } [price_range]
        
        @property { Array<number> } [ordering_stores]
        
         
    */

/**
        @typedef DisplayMetaDict
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
         
    */

/**
        @typedef DisplayMeta
        
        
        @property { DisplayMetaDict } [apply]
        
        @property { DisplayMetaDict } [auto]
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Ownership
        
        
        @property { string } payable_by
        
        @property { string } payable_category
        
         
    */

/**
        @typedef RuleDefinition
        
        
        @property { string } calculate_on
        
        @property { Array<string> } [scope]
        
        @property { boolean } [auto_apply]
        
        @property { boolean } [is_exact]
        
        @property { string } applicable_on
        
        @property { string } [currency_code]
        
        @property { string } value_type
        
        @property { string } type
        
         
    */

/**
        @typedef Rule
        
        
        @property { number } [max]
        
        @property { number } [value]
        
        @property { number } [discount_qty]
        
        @property { number } [min]
        
        @property { number } [key]
        
         
    */

/**
        @typedef CouponAdd
        
        
        @property { CouponSchedule } [_schedule]
        
        @property { Identifier } identifiers
        
        @property { Validity } validity
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAuthor } [author]
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { string } code
        
        @property { CouponAction } [action]
        
        @property { Restrictions } [restrictions]
        
        @property { DisplayMeta } display_meta
        
        @property { Ownership } ownership
        
        @property { RuleDefinition } rule_definition
        
        @property { Array<string> } [tags]
        
        @property { Array<Rule> } rule
        
        @property { string } type_slug
        
         
    */

/**
        @typedef CouponsResponse
        
        
        @property { CouponAdd } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SuccessMessage
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef OperationErrorResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef CouponUpdate
        
        
        @property { CouponSchedule } [_schedule]
        
        @property { Identifier } identifiers
        
        @property { Validity } validity
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAuthor } [author]
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { string } code
        
        @property { CouponAction } [action]
        
        @property { Restrictions } [restrictions]
        
        @property { DisplayMeta } display_meta
        
        @property { Ownership } ownership
        
        @property { RuleDefinition } rule_definition
        
        @property { Array<string> } [tags]
        
        @property { Array<Rule> } rule
        
        @property { string } type_slug
        
         
    */

/**
        @typedef CouponPartialUpdate
        
        
        @property { boolean } [archive]
        
        @property { CouponSchedule } [schedule]
        
         
    */

/**
        @typedef CartItem
        
        
        @property { number } [quantity]
        
        @property { string } size
        
        @property { string } product_id
        
         
    */

/**
        @typedef ProductImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ProductSizeChart
        
        
        @property { Array<string> } [values]
        
        @property { number } [is_available]
        
        @property { string } [display]
        
        @property { string } [unit]
        
         
    */

/**
        @typedef ProductListingBrandLogo
        
        
        @property { string } [aspect_ratio]
        
        @property { ProductListingAction } [action]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ProductWithSize
        
        
        @property { string } discount
        
        @property { string } price_marked
        
        @property { ProductImage } [image]
        
        @property { ProductListingAction } [action]
        
        @property { Array<ProductSizeChart> } [sizes]
        
        @property { string } selected_size
        
        @property { string } product_id
        
        @property { string } message
        
        @property { string } price_effective
        
        @property { ProductListingBrandLogo } [brand_logo]
        
        @property { string } brand
        
         
    */

/**
        @typedef Breakup
        
        
        @property { number } [value]
        
        @property { string } [key]
        
         
    */

/**
        @typedef CartDetail
        
        
        @property { boolean } [is_valid]
        
        @property { Array<ProductWithSize> } [items]
        
        @property { Array<Breakup> } [breakup]
        
         
    */

/**
        @typedef CartItems
        
        
        @property { Array<CartItem> } cart_items
        
         
    */

/**
        @typedef OpenapiCartDetailsRequest
        
        
        @property { CartItems } [cart_items]
        
         
    */

/**
        @typedef CouponBreakup
        
        
        @property { string } [uid]
        
        @property { boolean } [is_applied]
        
        @property { number } [value]
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { string } [type]
        
         
    */

/**
        @typedef RawBreakup
        
        
        @property { number } [vog]
        
        @property { number } [discount]
        
        @property { number } [delivery_charge]
        
        @property { number } [subtotal]
        
        @property { number } [gst_charges]
        
        @property { number } [cod_charge]
        
        @property { number } [coupon]
        
        @property { number } [convenience_fee]
        
        @property { number } [total]
        
        @property { string } [mrp_total]
        
        @property { number } [you_saved]
        
        @property { number } [fynd_cash]
        
         
    */

/**
        @typedef DisplayBreakup
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { Array<string> } [message]
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
        @property { string } [key]
        
         
    */

/**
        @typedef CartBreakup
        
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { CouponBreakup } [coupon]
        
        @property { RawBreakup } [raw]
        
        @property { Array<DisplayBreakup> } [display]
        
         
    */

/**
        @typedef ProductPrice
        
        
        @property { number } [effective]
        
        @property { number } [marked]
        
        @property { number } [add_on]
        
        @property { string } [currency_symbol]
        
        @property { number } [selling]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef ProductPriceInfo
        
        
        @property { ProductPrice } [base]
        
        @property { ProductPrice } [converted]
        
         
    */

/**
        @typedef CartProductIdentifer
        
        
        @property { string } [identifier]
        
         
    */

/**
        @typedef BasePrice
        
        
        @property { number } [effective]
        
        @property { number } [marked]
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef ArticlePriceInfo
        
        
        @property { BasePrice } [base]
        
        @property { BasePrice } [converted]
        
         
    */

/**
        @typedef BaseInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef ProductArticle
        
        
        @property { ArticlePriceInfo } [price]
        
        @property { string } [uid]
        
        @property { BaseInfo } [store]
        
        @property { string } [size]
        
        @property { Object } [extra_meta]
        
        @property { number } [quantity]
        
        @property { string } [type]
        
        @property { BaseInfo } [seller]
        
         
    */

/**
        @typedef ProductAvailability
        
        
        @property { Array<string> } [sizes]
        
        @property { boolean } [out_of_stock]
        
        @property { boolean } [deliverable]
        
        @property { boolean } [is_valid]
        
        @property { number } [other_store_quantity]
        
         
    */

/**
        @typedef PromoMeta
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef Image
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef ActionQuery
        
        
        @property { Array<string> } [product_slug]
        
         
    */

/**
        @typedef ProductAction
        
        
        @property { ActionQuery } [query]
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */

/**
        @typedef CategoryInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CartProductInfo
        
        
        @property { ProductPriceInfo } [price_per_unit]
        
        @property { string } [discount]
        
        @property { CartProductIdentifer } identifiers
        
        @property { ProductPriceInfo } [price]
        
        @property { ProductArticle } [article]
        
        @property { Object } [bulk_offer]
        
        @property { boolean } [is_set]
        
        @property { ProductAvailability } [availability]
        
        @property { string } [coupon_message]
        
        @property { string } [key]
        
        @property { string } [message]
        
        @property { PromoMeta } [promo_meta]
        
        @property { number } [quantity]
        
        @property { Product } [product]
        
         
    */

/**
        @typedef OpenapiCartDetailsResponse
        
        
        @property { CartBreakup } [breakup_values]
        
        @property { boolean } [is_valid]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [message]
        
         
    */

/**
        @typedef CartViewRequestSerializer
        
        
        @property { number } [quantity]
        
        @property { number } product_id
        
        @property { string } size
        
         
    */

/**
        @typedef AddressSerializerV1
        
        
        @property { number } [phone]
        
        @property { string } [landmark]
        
        @property { Object } [meta]
        
        @property { string } state
        
        @property { string } [area_code_slug]
        
        @property { string } [name]
        
        @property { string } area_code
        
        @property { string } [country_code]
        
        @property { string } [area]
        
        @property { string } [address]
        
        @property { string } country
        
        @property { string } [email]
        
        @property { string } [address_type]
        
        @property { string } city
        
        @property { number } [pincode]
        
         
    */

/**
        @typedef ServiceablityReqSerializer
        
        
        @property { Array<CartViewRequestSerializer> } [cart_items]
        
        @property { AddressSerializerV1 } shipping_address
        
        @property { string } [coupon]
        
         
    */

/**
        @typedef CartDetailsResponseSerializer
        
        
        @property { Object } [delivery_promise]
        
        @property { string } [breakup_values]
        
        @property { string } [message]
        
        @property { boolean } [is_valid]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef AddressSerializer
        
        
        @property { number } phone
        
        @property { string } [landmark]
        
        @property { string } [name]
        
        @property { string } [area]
        
        @property { string } [address]
        
        @property { string } [email]
        
        @property { string } [address_type]
        
        @property { string } [city]
        
        @property { number } [pincode]
        
         
    */

/**
        @typedef OpenApiFiles
        
        
        @property { Array<string> } values
        
        @property { string } key
        
         
    */

/**
        @typedef OrderCartItem
        
        
        @property { number } discount
        
        @property { number } price_marked
        
        @property { number } amount_paid
        
        @property { number } cod_charges
        
        @property { number } product_id
        
        @property { string } size
        
        @property { number } delivery_charges
        
        @property { number } price_effective
        
        @property { number } [quantity]
        
        @property { number } cashback_applied
        
        @property { number } [loyalty_discount]
        
        @property { number } [employee_discount]
        
        @property { number } coupon_effective_discount
        
         
    */

/**
        @typedef OpenApiCheckoutReq
        
        
        @property { boolean } is_cod
        
        @property { string } [order_id]
        
        @property { string } [payment_mode]
        
        @property { AddressSerializer } billing_address
        
        @property { number } cod_charges
        
        @property { number } coupon_value
        
        @property { string } request_hash
        
        @property { Array<OpenApiFiles> } [files]
        
        @property { string } [affiliate_order_id]
        
        @property { number } cashback_applied
        
        @property { string } [coupon]
        
        @property { number } delivery_charges
        
        @property { string } coupon_code
        
        @property { string } [currency_code]
        
        @property { Object } [employee_discount]
        
        @property { Array<OrderCartItem> } [cart_items]
        
        @property { number } cart_value
        
        @property { AddressSerializer } shipping_address
        
        @property { number } [loyalty_discount]
        
         
    */

/**
        @typedef ConfirmPaymentReqSerializer
        
        
        @property { string } [request_hash]
        
        @property { Object } [payment_meta]
        
        @property { string } [order_id]
        
         
    */

/**
        @typedef StoreMapping
        
        
        @property { string } [enabled]
        
        @property { string } [marketplace_store_id]
        
        @property { number } [store_id]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef AllChannels
        
        
        @property { boolean } [mkp_name]
        
         
    */

/**
        @typedef MyntraPayload
        
        
        @property { string } [merchant_id]
        
        @property { string } [secret_key]
        
         
    */

/**
        @typedef AmazonPayload
        
        
        @property { string } [seller_id]
        
        @property { string } [mws_auth_token]
        
         
    */

/**
        @typedef FlipkartPayload
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef TatacliqPayload
        
        
        @property { string } [user_name]
        
        @property { string } [password]
        
        @property { string } [merchant_id]
        
         
    */

/**
        @typedef AjioPayload
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [client_ip]
        
         
    */

/**
        @typedef InventorySyncConfig
        
        
        @property { boolean } [inventory]
        
        @property { boolean } [price]
        
         
    */

/**
        @typedef StoreMappingPayload
        
        
        @property { boolean } [store_mapping_enabled]
        
        @property { Array<StoreMapping> } [store_mapping]
        
         
    */

/**
        @typedef StatusPayload
        
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef StatusResp
        
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef SyncPayload
        
        
        @property { string } [modified_since]
        
         
    */

/**
        @typedef SyncResp
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef MkpResp
        
        
        @property { string } [marketplace]
        
        @property { number } [worker]
        
        @property { string } [worker_assigned]
        
        @property { boolean } [is_active]
        
        @property { boolean } [store_mapping_enabled]
        
        @property { number } [company_id]
        
        @property { Object } [configuration]
        
        @property { Array<StoreMapping> } [store_mapping]
        
         
    */

/**
        @typedef AppUser
        
        
        @property { string } [_id]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { string } [block_reason]
        
        @property { string } [updated_at]
        
        @property { string } [updated_by]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef E
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { number } [status]
        
         
    */

/**
        @typedef Giveaway
        
        
        @property { string } [_id]
        
        @property { Schedule } [_schedule]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { RewardsAudience } [audience]
        
        @property { Asset } [banner_image]
        
        @property { string } [created_at]
        
        @property { string } [description]
        
        @property { string } [name]
        
        @property { RewardsRule } [rule]
        
        @property { string } [title]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef GiveawayResponse
        
        
        @property { Array<Giveaway> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef HistoryPretty
        
        
        @property { string } [_id]
        
        @property { string } [application_id]
        
        @property { boolean } [claimed]
        
        @property { string } [created_at]
        
        @property { string } [expires_on]
        
        @property { number } [points]
        
        @property { number } [remaining_points]
        
        @property { string } [text_1]
        
        @property { string } [text_2]
        
        @property { string } [text_3]
        
        @property { string } [txn_name]
        
        @property { string } [updated_at]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef HistoryRes
        
        
        @property { Array<HistoryPretty> } [items]
        
        @property { Page } [page]
        
        @property { number } [points]
        
         
    */

/**
        @typedef Offer
        
        
        @property { Schedule } [_schedule]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { Asset } [banner_image]
        
        @property { string } [created_at]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [sub_text]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updated_at]
        
        @property { string } [updated_by]
        
        @property { string } [url]
        
         
    */

/**
        @typedef Points
        
        
        @property { number } [available]
        
         
    */

/**
        @typedef Referral
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef RewardUser
        
        
        @property { string } [_id]
        
        @property { boolean } [active]
        
        @property { string } [created_at]
        
        @property { Referral } [referral]
        
        @property { number } [uid]
        
        @property { string } [updated_at]
        
        @property { string } [user_block_reason]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef RewardsAudience
        
        
        @property { string } [header_user_id]
        
        @property { string } [id]
        
         
    */

/**
        @typedef RewardsRule
        
        
        @property { number } [amount]
        
         
    */

/**
        @typedef ShareMessages
        
        
        @property { string } [email]
        
        @property { string } [facebook]
        
        @property { string } [fallback]
        
        @property { string } [message]
        
        @property { string } [messenger]
        
        @property { string } [sms]
        
        @property { string } [text]
        
        @property { string } [twitter]
        
        @property { string } [whatsapp]
        
         
    */

/**
        @typedef UserRes
        
        
        @property { Points } [points]
        
        @property { RewardUser } [user]
        
         
    */

/**
        @typedef StatGroup
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
         
    */

/**
        @typedef StatsGroups
        
        
        @property { Array<StatGroup> } [groups]
        
         
    */

/**
        @typedef StatsGroupComponent
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [filters]
        
         
    */

/**
        @typedef StatsGroupComponents
        
        
        @property { string } [title]
        
        @property { Array<StatsGroupComponent> } [components]
        
         
    */

/**
        @typedef StatsRes
        
        
        @property { string } [key]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef ReceivedAt
        
        
        @property { string } [value]
        
         
    */

/**
        @typedef AbandonCartsDetail
        
        
        @property { string } [properties_cart_id]
        
        @property { string } [context_traits_first_name]
        
        @property { string } [context_traits_last_name]
        
        @property { string } [context_traits_phone_number]
        
        @property { string } [context_traits_email]
        
        @property { string } [context_app_application_id]
        
        @property { string } [properties_breakup_values_raw_total]
        
        @property { ReceivedAt } [received_at]
        
         
    */

/**
        @typedef AbandonCartsList
        
        
        @property { Array<AbandonCartsDetail> } [items]
        
        @property { string } [cart_total]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AbandonCartDetail
        
        
        @property { string } [_id]
        
        @property { string } [user_id]
        
        @property { string } [cart_value]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */

/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_time]
        
        @property { string } [end_time]
        
        @property { string } [event_type]
        
        @property { string } [trace_id]
        
         
    */

/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [job_id]
        
         
    */

/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [job_id]
        
        @property { string } [download_url]
        
         
    */

/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_date]
        
        @property { string } [company_id]
        
        @property { string } [end_date]
        
         
    */

/**
        @typedef MkpLogsResp
        
        
        @property { string } [start_time_iso]
        
        @property { string } [end_time_iso]
        
        @property { string } [event_type]
        
        @property { string } [trace_id]
        
        @property { string } [count]
        
        @property { string } [status]
        
         
    */

/**
        @typedef GetLogsListRes
        
        
        @property { Array<MkpLogsResp> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SearchLogReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_date]
        
        @property { string } [company_id]
        
        @property { string } [end_date]
        
        @property { string } [identifier]
        
        @property { string } [identifier_value]
        
         
    */

/**
        @typedef LogInfo
        
        
        @property { string } [_id]
        
        @property { string } [status]
        
        @property { string } [event_type]
        
        @property { string } [marketplace_name]
        
        @property { string } [event]
        
        @property { string } [trace_id]
        
        @property { number } [company_id]
        
        @property { number } [brand_id]
        
        @property { string } [store_code]
        
        @property { number } [store_id]
        
        @property { number } [item_id]
        
        @property { string } [article_id]
        
        @property { string } [seller_identifier]
        
         
    */

/**
        @typedef SearchLogRes
        
        
        @property { Array<LogInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ValidityObject
        
        
        @property { string } start
        
        @property { string } end
        
         
    */

/**
        @typedef CreateUpdateDiscount
        
        
        @property { string } name
        
        @property { number } company_id
        
        @property { boolean } is_active
        
        @property { Array<string> } app_ids
        
        @property { string } job_type
        
        @property { string } discount_type
        
        @property { string } discount_level
        
        @property { number } [value]
        
        @property { string } [file_path]
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { ValidityObject } validity
        
         
    */

/**
        @typedef DiscountJob
        
        
        @property { string } _id
        
        @property { string } name
        
        @property { number } company_id
        
        @property { boolean } is_active
        
        @property { Array<string> } [app_ids]
        
        @property { string } [job_type]
        
        @property { string } [discount_type]
        
        @property { string } [discount_level]
        
        @property { number } [value]
        
        @property { string } [file_path]
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { ValidityObject } validity
        
        @property { string } created_on
        
        @property { string } modified_on
        
        @property { UserDetails } created_by
        
        @property { UserDetails } modified_by
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef ListOrCalender
        
        
        @property { Array<DiscountJob> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef FileJobResponse
        
        
        @property { string } stage
        
        @property { number } total
        
        @property { number } failed
        
        @property { number } company_id
        
        @property { Object } [body]
        
        @property { string } type
        
        @property { string } file_type
        
         
    */

/**
        @typedef DownloadFileJob
        
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
         
    */

/**
        @typedef CancelJobResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef UserDetails
        
        
        @property { string } username
        
        @property { string } user_id
        
         
    */

/**
        @typedef BadRequestObject
        
        
        @property { string } message
        
         
    */

/**
        @typedef AddProxyReq
        
        
        @property { string } [attached_path]
        
        @property { string } [proxy_url]
        
         
    */

/**
        @typedef AddProxyResponse
        
        
        @property { string } [_id]
        
        @property { string } [attached_path]
        
        @property { string } [proxy_url]
        
        @property { string } [company_id]
        
        @property { string } [application_id]
        
        @property { string } [extension_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */

/**
        @typedef ApiError
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef RemoveProxyResponse
        
        
        @property { string } [message]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef EventConfig
        
        
        @property { number } [id]
        
        @property { string } [event_name]
        
        @property { string } [event_type]
        
        @property { string } [version]
        
        @property { string } [display_name]
        
        @property { string } [description]
        
        @property { string } [created_on]
        
         
    */

/**
        @typedef EventConfigList
        
        
        @property { Array<EventConfig> } [items]
        
         
    */

/**
        @typedef SubscriberConfigList
        
        
        @property { Array<SubscriberConfig> } [subscribers]
        
         
    */

/**
        @typedef EventProcessedStatus
        
        
        @property { number } [id]
        
        @property { string } [subscriber_id]
        
        @property { number } [attempt]
        
        @property { string } [response_code]
        
        @property { string } [response_message]
        
        @property { string } [created_on]
        
        @property { string } [processed_on]
        
        @property { boolean } [status]
        
         
    */

/**
        @typedef EventPayload
        
        
        @property { number } [id]
        
        @property { string } [event_trace_id]
        
        @property { number } [event_company_id]
        
        @property { string } [event_application_id]
        
        @property { string } [event_extension_id]
        
        @property { string } [event_name]
        
        @property { boolean } [status]
        
         
    */

/**
        @typedef SubscriberConfig
        
        
        @property { number } [id]
        
        @property { string } [webhook_url]
        
        @property { number } [company_id]
        
        @property { string } [application_id]
        
        @property { string } [extension_id]
        
        @property { string } [status]
        
        @property { Object } [auth_meta]
        
        @property { string } [created_on]
        
        @property { string } [updated_on]
        
        @property { Object } [subscriber_event_mapping]
        
         
    */

/**
        @typedef SubscriberEvent
        
        
        @property { number } [id]
        
        @property { number } [subscriber_id]
        
        @property { number } [event_id]
        
        @property { string } [created_date]
        
         
    */

/**
        @typedef AuthMeta
        
        
        @property { string } [type]
        
        @property { string } [username]
        
        @property { string } [password]
        
         
    */

class Lead {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * @description: Gets the list of company level tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    * @param {string} [arg.q] - Search through ticket titles and description
    * @param {string} [arg.status] - Filter tickets on status
    * @param {string} [arg.priority] - Filter tickets on priority
    * @param {string} [arg.category] - Filter tickets on category
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getTickets({
    items,
    filters,
    q,
    status,
    priority,
    category,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = LeadValidator.getTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["items"] = items;
    queryObj["filters"] = filters;
    queryObj["q"] = q;
    queryObj["status"] = status;
    queryObj["priority"] = priority;
    queryObj["category"] = category;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * @description: Gets the list of company level tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    * @param {string} [arg.q] - Search through ticket titles and description
    * @param {string} [arg.status] - Filter tickets on status
    * @param {string} [arg.priority] - Filter tickets on priority
    * @param {string} [arg.category] - Filter tickets on category
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getTicketsPaginator({
    items,
    filters,
    q,
    status,
    priority,
    category,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getTickets({
        items: items,
        filters: filters,
        q: q,
        status: status,
        priority: priority,
        category: category,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Creates a company level ticket
   * @description: Creates a company level ticket
   * @param {Object} arg - arg object.
   * @param {AddTicketPayload} arg.body
   **/
  createTicket({ body } = {}) {
    const { error } = LeadValidator.createTicket().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Retreives ticket details of a company level ticket with ticket ID
    * @description: Retreives ticket details of a company level ticket
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Tiket ID of the ticket to be fetched
    
    **/
  getTicket({ id } = {}) {
    const { error } = LeadValidator.getTicket().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edits ticket details of a company level ticket
   * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Ticket ID of ticket to be edited
   * @param {EditTicketPayload} arg.body
   **/
  editTicket({ id, body } = {}) {
    const { error } = LeadValidator.editTicket().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create history for specific company level ticket
   * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   **/
  createHistory({ id, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}/history`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Gets history list for specific company level ticket
    * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Ticket ID for which history is to be fetched
    
    **/
  getTicketHistory({ id } = {}) {
    const { error } = LeadValidator.getTicketHistory().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}/history`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Token to join a specific Video Room using it's unqiue name
    * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of video room
    
    **/
  getTokenForVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getTokenForVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/video/room/${uniqueName}/token`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get participants of a specific Video Room using it's unique name
    * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getVideoParticipants({ uniqueName } = {}) {
    const { error } = LeadValidator.getVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/video/room/${uniqueName}/participants`,
      queryObj,
      undefined
    );
  }
}

class Communication {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get system notifications
    * @description: Get system notifications
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - 
    * @param {number} [arg.pageSize] - 
    
    **/
  getSystemNotifications({ pageNo, pageSize } = {}) {
    const { error } = CommunicationValidator.getSystemNotifications().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/notification/system-notifications/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get system notifications
    * @description: Get system notifications
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - 
    
    **/
  getSystemNotificationsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSystemNotifications({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }
}

class Payment {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get All Payouts
    * @description: Get All Payouts
    * @param {Object} arg - arg object.
    * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
    
    **/
  getAllPayouts({ uniqueExternalId } = {}) {
    const { error } = PaymentValidator.getAllPayouts().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["unique_external_id"] = uniqueExternalId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Payout
   * @description: Save Payout
   * @param {Object} arg - arg object.
   * @param {PayoutRequest} arg.body
   **/
  savePayout({ body } = {}) {
    const { error } = PaymentValidator.savePayout().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Payout
   * @description: Update Payout
   * @param {Object} arg - arg object.
   * @param {string} arg.uniqueTransferNo - Unique transfer id
   * @param {PayoutRequest} arg.body
   **/
  updatePayout({ uniqueTransferNo, body } = {}) {
    const { error } = PaymentValidator.updatePayout().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Partial Update Payout
   * @description: Partial Update Payout
   * @param {Object} arg - arg object.
   * @param {string} arg.uniqueTransferNo - Unique transfer id
   * @param {UpdatePayoutRequest} arg.body
   **/
  activateAndDectivatePayout({ uniqueTransferNo, body } = {}) {
    const { error } = PaymentValidator.activateAndDectivatePayout().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete Payout
    * @description: Delete Payout
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueTransferNo - Unique transfer id
    
    **/
  deletePayout({ uniqueTransferNo } = {}) {
    const { error } = PaymentValidator.deletePayout().validate(
      {
        uniqueTransferNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Subscription Payment Method
    * @description: Get all  Subscription  Payment Method
    * @param {Object} arg - arg object.
    
    **/
  getSubscriptionPaymentMethod({} = {}) {
    const { error } = PaymentValidator.getSubscriptionPaymentMethod().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete Subscription Payment Method
    * @description: Uses this api to Delete Subscription Payment Method
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueExternalId - 
    * @param {string} arg.paymentMethodId - 
    
    **/
  deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId } = {}) {
    const {
      error,
    } = PaymentValidator.deleteSubscriptionPaymentMethod().validate(
      {
        uniqueExternalId,
        paymentMethodId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["unique_external_id"] = uniqueExternalId;
    queryObj["payment_method_id"] = paymentMethodId;

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Subscription Config
    * @description: Get all  Subscription Config details
    * @param {Object} arg - arg object.
    
    **/
  getSubscriptionConfig({} = {}) {
    const { error } = PaymentValidator.getSubscriptionConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/configs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Subscription Setup Intent
   * @description: Uses this api to Save Subscription Setup Intent
   * @param {Object} arg - arg object.
   * @param {SaveSubscriptionSetupIntentRequest} arg.body
   **/
  saveSubscriptionSetupIntent({ body } = {}) {
    const { error } = PaymentValidator.saveSubscriptionSetupIntent().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/setup/intent`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Ifsc Code Verification
    * @description: Get True/False for correct IFSC Code for adding bank details for refund
    * @param {Object} arg - arg object.
    * @param {string} [arg.ifscCode] - 
    
    **/
  verifyIfscCode({ ifscCode } = {}) {
    const { error } = PaymentValidator.verifyIfscCode().validate(
      {
        ifscCode,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["ifsc_code"] = ifscCode;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/ifsc-code/verify`,
      queryObj,
      undefined
    );
  }
}

class Catalog {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: List all Product Bundles
    * @description: Get all product bundles for a particular company
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - A search string that is searched with product bundle name.
    
    **/
  getProductBundle({ q } = {}) {
    const { error } = CatalogValidator.getProductBundle().validate(
      {
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Product Bundle
   * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
   * @param {Object} arg - arg object.
   * @param {ProductBundleRequest} arg.body
   **/
  createProductBundle({ body } = {}) {
    const { error } = CatalogValidator.createProductBundle().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update a Product Bundle
   * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
   * @param {ProductBundleUpdateRequest} arg.body
   **/
  updateProductBundle({ id, body } = {}) {
    const { error } = CatalogValidator.updateProductBundle().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a particular Product Bundle details
    * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
    
    **/
  getProductBundleDetail({ id } = {}) {
    const { error } = CatalogValidator.getProductBundleDetail().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of size guides
    * @description: This API allows to view all the size guides associated to the seller.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.active] - filter size guide on basis of active, in-active
    * @param {string} [arg.q] - Query that is to be searched.
    * @param {string} [arg.tag] - to filter size guide on basis of tag.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getSizeGuides({ active, q, tag, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getSizeGuides().validate(
      {
        active,
        q,
        tag,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["active"] = active;
    queryObj["q"] = q;
    queryObj["tag"] = tag;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a size guide.
   * @description: This API allows to create a size guide associated to a brand.
   * @param {Object} arg - arg object.
   * @param {ValidateSizeGuide} arg.body
   **/
  createSizeGuide({ body } = {}) {
    const { error } = CatalogValidator.createSizeGuide().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Edit a size guide.
   * @description: This API allows to edit a size guide.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Mongo id of the size guide to be edited
   * @param {ValidateSizeGuide} arg.body
   **/
  updateSizeGuide({ id, body } = {}) {
    const { error } = CatalogValidator.updateSizeGuide().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a single size guide.
    * @description: This API helps to get data associated to a size guide.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Id of the size guide to be viewed.
    
    **/
  getSizeGuide({ id } = {}) {
    const { error } = CatalogValidator.getSizeGuide().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Analytics data of catalog and inventory that are being cross-selled.
    * @description: Analytics data of catalog and inventory that are being cross-selled.
    * @param {Object} arg - arg object.
    * @param {string} arg.sellerAppId - Id of the seller application which is serving the invetory/catalog of the company
    
    **/
  getSellerInsights({ sellerAppId } = {}) {
    const { error } = CatalogValidator.getSellerInsights().validate(
      {
        sellerAppId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/cross-selling/${sellerAppId}/analytics/insights/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create/Update opt-in infomation.
   * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
   * @param {Object} arg - arg object.
   * @param {string} arg.marketplace - The marketplace for which the detail needs to be retrieved.
   * @param {OptInPostRequest} arg.body
   **/
  createMarketplaceOptin({ marketplace, body } = {}) {
    const { error } = CatalogValidator.createMarketplaceOptin().validate(
      {
        marketplace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/${marketplace}/optin/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get opt-in infomation.
    * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
    * @param {Object} arg - arg object.
    
    **/
  getMarketplaceOptinDetail({} = {}) {
    const { error } = CatalogValidator.getMarketplaceOptinDetail().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Company details.
    * @description: Get the details of the company associated with the given company_id passed.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyDetail({} = {}) {
    const { error } = CatalogValidator.getCompanyDetail().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-details/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Company Brand details of Optin.
    * @description: Get the details of the Brands associated with the given company_id passed.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.isActive] - The is_active status for the optin id.
    * @param {boolean} [arg.q] - The search value to filter the list.
    * @param {number} [arg.pageNo] - The number of page for the company id.
    * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
    * @param {string} [arg.marketplace] - The marketplace platform associated with the company id.
    
    **/
  getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace } = {}) {
    const { error } = CatalogValidator.getCompanyBrandDetail().validate(
      {
        isActive,
        q,
        pageNo,
        pageSize,
        marketplace,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["is_active"] = isActive;
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["marketplace"] = marketplace;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-brand-details/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Company metrics
    * @description: Get the Company metrics associated with the company ID passed.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyMetrics({} = {}) {
    const { error } = CatalogValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-metrics/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Store details.
    * @description: Get the details of the store associated with the company ID passed.
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search related the store for the company id.
    * @param {number} [arg.pageNo] - The number of page for the company id.
    * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
    
    **/
  getStoreDetail({ q, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getStoreDetail().validate(
      {
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/location-details/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get gender attribute details
    * @description: This API allows to view the gender attribute details.
    * @param {Object} arg - arg object.
    * @param {string} arg.attributeSlug - slug of the attribute for which you want to view the genders
    
    **/
  getGenderAttribute({ attributeSlug } = {}) {
    const { error } = CatalogValidator.getGenderAttribute().validate(
      {
        attributeSlug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-attributes/${attributeSlug}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Department specifiec product categories
    * @description: Allows you to list all product categories values for the departments specified
    * @param {Object} arg - arg object.
    * @param {string} arg.departments - A `department` is name of a departments whose category needs to be listed. Can specify multiple departments.
    * @param {string} arg.itemType - An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc.
    
    **/
  listProductTemplateCategories({ departments, itemType } = {}) {
    const { error } = CatalogValidator.listProductTemplateCategories().validate(
      {
        departments,
        itemType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["departments"] = departments;
    queryObj["item_type"] = itemType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/categories/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all Departments
    * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {string} [arg.name] - Can search departments by passing name.
    * @param {string} [arg.search] - Can search departments by passing name of the department in search parameter.
    * @param {boolean} [arg.isActive] - Can query for departments based on whether they are active or inactive.
    
    **/
  listDepartmentsData({ pageNo, pageSize, name, search, isActive } = {}) {
    const { error } = CatalogValidator.listDepartmentsData().validate(
      {
        pageNo,
        pageSize,
        name,
        search,
        isActive,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["name"] = name;
    queryObj["search"] = search;
    queryObj["is_active"] = isActive;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get specific departments details by passing in unique id of the department
    * @description: Allows you to get department data, by uid
    * @param {Object} arg - arg object.
    * @param {string} arg.uid - A `uid` is a unique identifier of a department.
    
    **/
  getDepartmentData({ uid } = {}) {
    const { error } = CatalogValidator.getDepartmentData().validate(
      {
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/${uid}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all Templates
    * @description: Allows you to list all product templates, also can filter by department
    * @param {Object} arg - arg object.
    * @param {string} arg.departments - A `departments` is the name of a particular department.
    
    **/
  listProductTemplate({ departments } = {}) {
    const { error } = CatalogValidator.listProductTemplate().validate(
      {
        departments,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["departments"] = departments;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Validate Product Template Schema
    * @description: Allows you to list all product templates validation values for all the fields present in the database
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
    
    **/
  validateProductTemplate({ slug } = {}) {
    const { error } = CatalogValidator.validateProductTemplate().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/${slug}/validation/schema/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Download Product Template View
    * @description: Allows you to download product template data
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
    
    **/
  downloadProductTemplateViews({ slug } = {}) {
    const { error } = CatalogValidator.downloadProductTemplateViews().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/${slug}/download/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Download Product Template View
    * @description: Allows you to download product template data
    * @param {Object} arg - arg object.
    * @param {string} arg.itemType - An `item_type` defines the type of item.
    
    **/
  downloadProductTemplateView({ itemType } = {}) {
    const { error } = CatalogValidator.downloadProductTemplateView().validate(
      {
        itemType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["item_type"] = itemType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/templates/download/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Validate Product Template Schema
    * @description: Allows you to list all product templates validation values for all the fields present in the database
    * @param {Object} arg - arg object.
    * @param {string} arg.itemType - An `item_type` defines the type of item. The default value is standard.
    
    **/
  validateProductTemplateSchema({ itemType } = {}) {
    const { error } = CatalogValidator.validateProductTemplateSchema().validate(
      {
        itemType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["item_type"] = itemType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/templates/validation/schema/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List HSN Codes
    * @description: Allows you to list all hsn Codes
    * @param {Object} arg - arg object.
    
    **/
  listHSNCodes({} = {}) {
    const { error } = CatalogValidator.listHSNCodes().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/hsn/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Allows you to list all product templates export list details
    * @description: Can view details including trigger data, task id , etc.
    * @param {Object} arg - arg object.
    
    **/
  listProductTemplateExportDetails({} = {}) {
    const {
      error,
    } = CatalogValidator.listProductTemplateExportDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/downloads/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Allows you to list all values for Templates, Brands or Type
    * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
    * @param {Object} arg - arg object.
    * @param {string} arg.filter - A `filter` is the unique identifier of the type of value required.
    
    **/
  listTemplateBrandTypeValues({ filter } = {}) {
    const { error } = CatalogValidator.listTemplateBrandTypeValues().validate(
      {
        filter,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["filter"] = filter;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/downloads/configuration/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get product categories list
    * @description: This API gets meta associated to product categories.
    * @param {Object} arg - arg object.
    * @param {string} [arg.level] - Get category for multiple levels
    * @param {string} [arg.departments] - Get category for multiple departments filtered
    * @param {string} [arg.q] - Get multiple categories filtered by search string
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  listCategories({ level, departments, q, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.listCategories().validate(
      {
        level,
        departments,
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["level"] = level;
    queryObj["departments"] = departments;
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create product categories
   * @description: This API lets user create product categories
   * @param {Object} arg - arg object.
   * @param {CategoryRequestBody} arg.body
   **/
  createCategories({ body } = {}) {
    const { error } = CatalogValidator.createCategories().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update product categories
   * @description: Update a product category using this apu
   * @param {Object} arg - arg object.
   * @param {string} arg.uid - Category unique id
   * @param {CategoryRequestBody} arg.body
   **/
  updateCategory({ uid, body } = {}) {
    const { error } = CatalogValidator.updateCategory().validate(
      {
        uid,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/${uid}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get product category by uid
    * @description: This API gets meta associated to product categories.
    * @param {Object} arg - arg object.
    * @param {string} arg.uid - Category unique id
    
    **/
  getCategoryData({ uid } = {}) {
    const { error } = CatalogValidator.getCategoryData().validate(
      {
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/${uid}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get product list
    * @description: This API gets meta associated to products.
    * @param {Object} arg - arg object.
    * @param {number} [arg.brandIds] - Get multiple products filtered by brand Ids
    * @param {number} [arg.categoryIds] - Get multiple products filtered by category Ids
    * @param {string} [arg.search] - Get multiple products filtered by search string
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getProducts({ brandIds, categoryIds, search, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getProducts().validate(
      {
        brandIds,
        categoryIds,
        search,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["brand_ids"] = brandIds;
    queryObj["category_ids"] = categoryIds;
    queryObj["search"] = search;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a product.
   * @description: This API allows to create product.
   * @param {Object} arg - arg object.
   * @param {ProductCreateUpdate} arg.body
   **/
  createProduct({ body } = {}) {
    const { error } = CatalogValidator.createProduct().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Edit a product.
   * @description: This API allows to edit product.
   * @param {Object} arg - arg object.
   * @param {number} arg.itemId - Id of the product to be updated.
   * @param {ProductCreateUpdate} arg.body
   **/
  editProduct({ itemId, body } = {}) {
    const { error } = CatalogValidator.editProduct().validate(
      {
        itemId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete a product.
    * @description: This API allows to delete product.
    * @param {Object} arg - arg object.
    * @param {number} arg.itemId - Id of the product to be updated.
    
    **/
  deleteProduct({ itemId } = {}) {
    const { error } = CatalogValidator.deleteProduct().validate(
      {
        itemId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a single product.
    * @description: This API helps to get data associated to a particular product.
    * @param {Object} arg - arg object.
    * @param {string} [arg.itemCode] - Item code of the product.
    * @param {number} arg.itemId - Item Id of the product.
    * @param {number} [arg.brandUid] - Brand Id of the product.
    * @param {number} [arg.uid] - Id of the product.
    
    **/
  getProduct({ itemId, itemCode, brandUid, uid } = {}) {
    const { error } = CatalogValidator.getProduct().validate(
      {
        itemId,
        itemCode,
        brandUid,
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["item_code"] = itemCode;
    queryObj["brand_uid"] = brandUid;
    queryObj["uid"] = uid;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Validate product/size data
    * @description: This API validates product data.
    * @param {Object} arg - arg object.
    
    **/
  getProductValidation({} = {}) {
    const { error } = CatalogValidator.getProductValidation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/validation/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a single product size.
    * @description: This API helps to get data associated to a particular product size.
    * @param {Object} arg - arg object.
    * @param {string} [arg.itemCode] - Item code of the product size.
    * @param {number} arg.itemId - Item Id of the product size.
    * @param {number} [arg.brandUid] - Brand Id of the product size.
    * @param {number} [arg.uid] - Id of the product size.
    
    **/
  getProductSize({ itemId, itemCode, brandUid, uid } = {}) {
    const { error } = CatalogValidator.getProductSize().validate(
      {
        itemId,
        itemCode,
        brandUid,
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["item_code"] = itemCode;
    queryObj["brand_uid"] = brandUid;
    queryObj["uid"] = uid;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of all bulk product upload jobs.
    * @description: This API helps to get bulk product upload jobs data.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductBulkUploadHistory({ pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getProductBulkUploadHistory().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a Bulk asset upload Job.
   * @description: This API helps to create a bulk asset upload job.
   * @param {Object} arg - arg object.
   * @param {BulkJob} arg.body
   **/
  updateProductAssetsInBulk({ body } = {}) {
    const { error } = CatalogValidator.updateProductAssetsInBulk().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete Bulk product job.
    * @description: This API allows to delete bulk product job associated with company.
    * @param {Object} arg - arg object.
    * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
    
    **/
  deleteProductBulkJob({ batchId } = {}) {
    const { error } = CatalogValidator.deleteProductBulkJob().validate(
      {
        batchId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk/${batchId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create products in bulk associated with given batch Id.
   * @description: This API helps to create products in bulk push to kafka for approval/creation.
   * @param {Object} arg - arg object.
   * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
   * @param {BulkProductRequest} arg.body
   **/
  createProductsInBulk({ batchId, body } = {}) {
    const { error } = CatalogValidator.createProductsInBulk().validate(
      {
        batchId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk/${batchId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a list of all tags associated with company.
    * @description: This API helps to get tags data associated to a particular copmpany.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyTags({} = {}) {
    const { error } = CatalogValidator.getCompanyTags().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/tags`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of all bulk asset jobs.
    * @description: This API helps to get bulk asset jobs data associated to a particular company.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductAssetsInBulk({ pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getProductAssetsInBulk().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/assets/bulk/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a Bulk asset upload Job.
   * @description: This API helps to create a bulk asset upload job.
   * @param {Object} arg - arg object.
   * @param {ProductBulkAssets} arg.body
   **/
  createProductAssetsInBulk({ body } = {}) {
    const { error } = CatalogValidator.createProductAssetsInBulk().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/assets/bulk/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete a Size associated with product.
    * @description: This API allows to delete size associated with product.
    * @param {Object} arg - arg object.
    * @param {number} arg.itemId - Item Id of the product associated with size to be deleted.
    * @param {number} arg.size - size to be deleted.
    
    **/
  deleteSize({ itemId, size } = {}) {
    const { error } = CatalogValidator.deleteSize().validate(
      {
        itemId,
        size,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Inventory for company
    * @description: This API allows get Inventory data for particular company grouped by size and store.
    * @param {Object} arg - arg object.
    * @param {string} arg.itemId - Item code of the product of which size is to be get.
    * @param {string} arg.size - Size of which inventory is to get.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getInventory({ itemId, size, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getInventory().validate(
      {
        itemId,
        size,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store.
   * @param {Object} arg - arg object.
   * @param {number} arg.itemId - Item code of the product of which size is to be get.
   * @param {string} arg.size - Size in which inventory is to be added.
   * @param {InventoryRequest} arg.body
   **/
  addInventory({ itemId, size, body } = {}) {
    const { error } = CatalogValidator.addInventory().validate(
      {
        itemId,
        size,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete a Inventory.
    * @description: This API allows to delete inventory of a particular product for particular company.
    * @param {Object} arg - arg object.
    * @param {number} arg.itemId - Id of the product associated with Inventory to be deleted.
    * @param {number} arg.locationId - Location ID of store of which inventory is to be deleted.
    
    **/
  deleteInventory({ itemId, locationId } = {}) {
    const { error } = CatalogValidator.deleteInventory().validate(
      {
        itemId,
        locationId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/<size>/location/${locationId}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of all bulk Inventory upload jobs.
    * @description: This API helps to get bulk Inventory upload jobs data.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getInventoryBulkUploadHistory({ pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getInventoryBulkUploadHistory().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a Bulk Inventory upload Job.
   * @description: This API helps to create a bulk Inventory upload job.
   * @param {Object} arg - arg object.
   * @param {BulkJob} arg.body
   **/
  createBulkInventoryJob({ body } = {}) {
    const { error } = CatalogValidator.createBulkInventoryJob().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete Bulk Inventory job.
    * @description: This API allows to delete bulk Inventory job associated with company.
    * @param {Object} arg - arg object.
    
    **/
  deleteBulkInventoryJob({} = {}) {
    const { error } = CatalogValidator.deleteBulkInventoryJob().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/<batch_id>/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create products in bulk associated with given batch Id.
   * @description: This API helps to create products in bulk push to kafka for approval/creation.
   * @param {Object} arg - arg object.
   * @param {InventoryBulkRequest} arg.body
   **/
  createBulkInventory({ body } = {}) {
    const { error } = CatalogValidator.createBulkInventory().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/<batch_id>/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Inventory export history.
    * @description: This API helps to get Inventory export history.
    * @param {Object} arg - arg object.
    
    **/
  getInventoryExport({} = {}) {
    const { error } = CatalogValidator.getInventoryExport().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a Inventory export Job.
   * @description: This API helps to create a Inventory export job.
   * @param {Object} arg - arg object.
   * @param {InventoryExportRequest} arg.body
   **/
  createInventoryExportJob({ body } = {}) {
    const { error } = CatalogValidator.createInventoryExportJob().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get List of different filters for inventory export
    * @description: This API allows get List of different filters like brand, store, and type for inventory export.
    * @param {Object} arg - arg object.
    * @param {string} [arg.filterType] - filter type from any one of ['brand', 'store', 'type']
    
    **/
  exportInventoryConfig({ filterType } = {}) {
    const { error } = CatalogValidator.exportInventoryConfig().validate(
      {
        filterType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["filter_type"] = filterType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/configuration/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Hsn Code List.
    * @description: Hsn Code List.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - page no
    * @param {number} [arg.pageSize] - page size
    * @param {string} [arg.q] - search using hsn code.
    
    **/
  getAllHsnCodes({ pageNo, pageSize, q } = {}) {
    const { error } = CatalogValidator.getAllHsnCodes().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Hsn Code.
   * @description: Create Hsn Code.
   * @param {Object} arg - arg object.
   * @param {HsnUpsert} arg.body
   **/
  createHsnCode({ body } = {}) {
    const { error } = CatalogValidator.createHsnCode().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Hsn Code.
   * @description: Update Hsn Code.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Unique id
   * @param {HsnUpsert} arg.body
   **/
  updateHsnCode({ id, body } = {}) {
    const { error } = CatalogValidator.updateHsnCode().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Fetch Hsn Code.
    * @description: Fetch Hsn Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Unique id
    
    **/
  getHsnCode({ id } = {}) {
    const { error } = CatalogValidator.getHsnCode().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Bulk Create or Update Hsn Code.
   * @description: Bulk Create or Update Hsn Code.
   * @param {Object} arg - arg object.
   * @param {BulkHsnUpsert} arg.body
   **/
  bulkHsnCode({ body } = {}) {
    const { error } = CatalogValidator.bulkHsnCode().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/bulk/`,
      queryObj,
      body
    );
  }
}

class CompanyProfile {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Edit company profile
   * @description: This API allows to edit the company profile of the seller account.
   * @param {Object} arg - arg object.
   * @param {CompanyStoreSerializerRequest} arg.body
   **/
  updateCompany({ body } = {}) {
    const { error } = CompanyProfileValidator.updateCompany().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get company profile
    * @description: This API allows to view the company profile of the seller account.
    * @param {Object} arg - arg object.
    
    **/
  cbsOnboardGet({} = {}) {
    const { error } = CompanyProfileValidator.cbsOnboardGet().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get company metrics
    * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyMetrics({} = {}) {
    const { error } = CompanyProfileValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/metrics`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a single brand.
    * @description: This API helps to get data associated to a particular brand.
    * @param {Object} arg - arg object.
    * @param {string} arg.brandId - Id of the brand to be viewed.
    
    **/
  getBrand({ brandId } = {}) {
    const { error } = CompanyProfileValidator.getBrand().validate(
      {
        brandId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit a brand.
   * @description: This API allows to edit meta of a brand.
   * @param {Object} arg - arg object.
   * @param {string} arg.brandId - Id of the brand to be viewed.
   * @param {CreateUpdateBrandRequestSerializer} arg.body
   **/
  editBrand({ brandId, body } = {}) {
    const { error } = CompanyProfileValidator.editBrand().validate(
      {
        brandId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create a Brand.
   * @description: This API allows to create a brand associated to a company.
   * @param {Object} arg - arg object.
   * @param {CreateUpdateBrandRequestSerializer} arg.body
   **/
  createBrand({ body } = {}) {
    const { error } = CompanyProfileValidator.createBrand().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create a company brand mapping.
   * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
   * @param {Object} arg - arg object.
   * @param {CompanyBrandPostRequestSerializer} arg.body
   **/
  createCompanyBrandMapping({ body } = {}) {
    const {
      error,
    } = CompanyProfileValidator.createCompanyBrandMapping().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get brands associated to a company
    * @description: This API helps to get view brands associated to a particular company.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getBrands({ pageNo, pageSize } = {}) {
    const { error } = CompanyProfileValidator.getBrands().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get brands associated to a company
    * @description: This API helps to get view brands associated to a particular company.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getBrandsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBrands({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Create a location asscoiated to a company.
   * @description: This API allows to create a location associated to a company.
   * @param {Object} arg - arg object.
   * @param {LocationSerializer} arg.body
   **/
  createLocation({ body } = {}) {
    const { error } = CompanyProfileValidator.createLocation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of locations
    * @description: This API allows to view all the locations asscoiated to a company.
    * @param {Object} arg - arg object.
    * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
    * @param {string} [arg.q] - Query that is to be searched.
    * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getLocations({ storeType, q, stage, pageNo, pageSize } = {}) {
    const { error } = CompanyProfileValidator.getLocations().validate(
      {
        storeType,
        q,
        stage,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["store_type"] = storeType;
    queryObj["q"] = q;
    queryObj["stage"] = stage;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of locations
    * @description: This API allows to view all the locations asscoiated to a company.
    * @param {Object} arg - arg object.
    * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
    * @param {string} [arg.q] - Query that is to be searched.
    * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getLocationsPaginator({ storeType, q, stage, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLocations({
        storeType: storeType,
        q: q,
        stage: stage,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get details of a specific location.
    * @description: This API helps to get data associated to a specific location.
    * @param {Object} arg - arg object.
    * @param {string} arg.locationId - Id of the location which you want to view.
    
    **/
  getLocationDetail({ locationId } = {}) {
    const { error } = CompanyProfileValidator.getLocationDetail().validate(
      {
        locationId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit a location asscoiated to a company.
   * @description: This API allows to edit a location associated to a company.
   * @param {Object} arg - arg object.
   * @param {string} arg.locationId - Id of the location which you want to edit.
   * @param {LocationSerializer} arg.body
   **/
  updateLocation({ locationId, body } = {}) {
    const { error } = CompanyProfileValidator.updateLocation().validate(
      {
        locationId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create a location asscoiated to a company in bulk.
   * @description: This API allows to create a location associated to a company.
   * @param {Object} arg - arg object.
   * @param {BulkLocationSerializer} arg.body
   **/
  createLocationBulk({ body } = {}) {
    const { error } = CompanyProfileValidator.createLocationBulk().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/bulk`,
      queryObj,
      body
    );
  }
}

class FileStorage {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartRequest} arg.body
    **/
  startUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.startUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/upload/start/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartResponse} arg.body
    **/
  completeUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.completeUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/upload/complete/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Explain here
   * @description: Describe here
   * @param {Object} arg - arg object.
   * @param {SignUrlRequest} arg.body
   **/
  getSignUrls({ body } = {}) {
    const { error } = FileStorageValidator.getSignUrls().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/sign-urls/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Copy Files
   * @description: Copy Files
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.sync] - sync
   * @param {BulkRequest} arg.body
   **/
  copyFiles({ body, sync } = {}) {
    const { error } = FileStorageValidator.copyFiles().validate(
      {
        body,
        sync,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["sync"] = sync;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/uploads/copy/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {number} [arg.pageNo] - page no
    
    **/
  browse({ namespace, pageNo } = {}) {
    const { error } = FileStorageValidator.browse().validate(
      {
        namespace,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/browse/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  browsePaginator({ namespace } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.browse({
        namespace: namespace,
        pageNo: pageNo,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Proxy
    * @description: Proxy
    * @param {Object} arg - arg object.
    * @param {string} arg.url - url
    
    **/
  proxy({ url } = {}) {
    const { error } = FileStorageValidator.proxy().validate(
      {
        url,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["url"] = url;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/proxy/`,
      queryObj,
      undefined
    );
  }
}

class Inventory {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get Job Configs For A Company
    * @description: REST Endpoint that returns all job configs for a company
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobsByCompany({ pageNo, pageSize } = {}) {
    const { error } = InventoryValidator.getJobsByCompany().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Updates An Existing Job Config
   * @description: REST Endpoint that updates a job config
   * @param {Object} arg - arg object.
   * @param {JobConfigDTO} arg.body
   **/
  updateJob({ body } = {}) {
    const { error } = InventoryValidator.updateJob().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Creates A New Job Config
   * @description: REST Endpoint that creates a new job config
   * @param {Object} arg - arg object.
   * @param {JobConfigDTO} arg.body
   **/
  createJob({ body } = {}) {
    const { error } = InventoryValidator.createJob().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Job Configs By Company And Integration
    * @description: REST Endpoint that returns all job configs by company And integration
    * @param {Object} arg - arg object.
    * @param {string} arg.integrationId - Integration Id
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
    const {
      error,
    } = InventoryValidator.getJobByCompanyAndIntegration().validate(
      {
        integrationId,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/integration/${integrationId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Job Configs Defaults
    * @description: REST Endpoint that returns default fields job configs by company And integration
    * @param {Object} arg - arg object.
    
    **/
  getJobConfigDefaults({} = {}) {
    const { error } = InventoryValidator.getJobConfigDefaults().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/defaults`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Job Config By Code
    * @description: REST Endpoint that returns job config by code
    * @param {Object} arg - arg object.
    * @param {string} arg.code - Job Code
    
    **/
  getJobByCode({ code } = {}) {
    const { error } = InventoryValidator.getJobByCode().validate(
      {
        code,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/${code}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Job Codes By Company And Integration
    * @description: REST Endpoint that returns all job codes by company And integration
    * @param {Object} arg - arg object.
    * @param {string} arg.integrationId - Integration Id
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
    const {
      error,
    } = InventoryValidator.getJobCodesByCompanyAndIntegration().validate(
      {
        integrationId,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/integration/${integrationId}`,
      queryObj,
      undefined
    );
  }
}

class Configuration {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Create application
   * @description: Create new application
   * @param {Object} arg - arg object.
   * @param {CreateApplicationRequest} arg.body
   **/
  createApplication({ body } = {}) {
    const { error } = ConfigurationValidator.createApplication().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of application under company
    * @description: Get list of application under company
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - 
    * @param {number} [arg.pageSize] - 
    * @param {string} [arg.q] - Url encoded object used as mongodb query
    
    **/
  getApplications({ pageNo, pageSize, q } = {}) {
    const { error } = ConfigurationValidator.getApplications().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of application under company
    * @description: Get list of application under company
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - 
    * @param {string} [arg.q] - Url encoded object used as mongodb query
    
    **/
  getApplicationsPaginator({ pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplications({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get all currencies
    * @description: Get all currencies
    * @param {Object} arg - arg object.
    
    **/
  getCurrencies({} = {}) {
    const { error } = ConfigurationValidator.getCurrencies().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/currencies`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Check domain availibility before linking to application
   * @description: Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.
   * @param {Object} arg - arg object.
   * @param {DomainSuggestionsRequest} arg.body
   **/
  getDomainAvailibility({ body } = {}) {
    const { error } = ConfigurationValidator.getDomainAvailibility().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/domain/suggestions`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get integration data
    * @description: Get integration data
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Integration id
    
    **/
  getIntegrationById({ id } = {}) {
    const { error } = ConfigurationValidator.getIntegrationById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all available integration opt-ins
    * @description: Get all available integration opt-ins
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAvailableOptIns({ pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getAvailableOptIns().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/available`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all available integration opt-ins
    * @description: Get all available integration opt-ins
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAvailableOptInsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAvailableOptIns({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get company/store level integration opt-ins
    * @description: Get company/store level integration opt-ins
    * @param {Object} arg - arg object.
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getSelectedOptIns({ level, uid, pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getSelectedOptIns().validate(
      {
        level,
        uid,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/selected/${level}/${uid}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get company/store level integration opt-ins
    * @description: Get company/store level integration opt-ins
    * @param {Object} arg - arg object.
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getSelectedOptInsPaginator({ level, uid, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSelectedOptIns({
        level: level,
        uid: uid,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get integration level config
    * @description: Get integration level config
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Integration id
    * @param {string} arg.level - Integration level
    * @param {boolean} [arg.opted] - Filter on opted stores
    * @param {boolean} [arg.checkPermission] - Filter on if permissions are present
    
    **/
  getIntegrationLevelConfig({ id, level, opted, checkPermission } = {}) {
    const {
      error,
    } = ConfigurationValidator.getIntegrationLevelConfig().validate(
      {
        id,
        level,
        opted,
        checkPermission,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["opted"] = opted;
    queryObj["check_permission"] = checkPermission;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get level data for integration
    * @description: Get level data for integration
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Integration id
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    
    **/
  getIntegrationByLevelId({ id, level, uid } = {}) {
    const { error } = ConfigurationValidator.getIntegrationByLevelId().validate(
      {
        id,
        level,
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}/${uid}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Check store has active integration
    * @description: API checks if a store is already opted in any other integrations
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Integration id
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    
    **/
  getLevelActiveIntegrations({ id, level, uid } = {}) {
    const {
      error,
    } = ConfigurationValidator.getLevelActiveIntegrations().validate(
      {
        id,
        level,
        uid,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/check/configuration/${id}/${level}/${uid}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get brands by company
    * @description: Get brands by company
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - Search text for brand name
    
    **/
  getBrandsByCompany({ q } = {}) {
    const { error } = ConfigurationValidator.getBrandsByCompany().validate(
      {
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/brands-by-companies`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Get company by brand uids
   * @description: Get company by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {CompanyByBrandsRequest} arg.body
   **/
  getCompanyByBrands({ body, pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getCompanyByBrands().validate(
      {
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/companies-by-brands`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get company by brand uids
   * @description: Get company by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageSize] - Current request items count
   * @param {CompanyByBrandsRequest} arg.body
   **/
  getCompanyByBrandsPaginator({ pageSize, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCompanyByBrands({
        body: body,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Get stores by brand uids
   * @description: Get stores by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {StoreByBrandsRequest} arg.body
   **/
  getStoreByBrands({ body, pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getStoreByBrands().validate(
      {
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/stores-by-brands`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get stores by brand uids
   * @description: Get stores by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageSize] - Current request items count
   * @param {StoreByBrandsRequest} arg.body
   **/
  getStoreByBrandsPaginator({ pageSize, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStoreByBrands({
        body: body,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get other seller applications
    * @description: Get other seller applications who has opted current company as inventory
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getOtherSellerApplications({ pageNo, pageSize } = {}) {
    const {
      error,
    } = ConfigurationValidator.getOtherSellerApplications().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get other seller applications
    * @description: Get other seller applications who has opted current company as inventory
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getOtherSellerApplicationsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOtherSellerApplications({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get other seller applications
    * @description: Get other seller application
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Application Id
    
    **/
  getOtherSellerApplicationById({ id } = {}) {
    const {
      error,
    } = ConfigurationValidator.getOtherSellerApplicationById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Opt out company or store from other seller application
   * @description: Opt out company or store from other seller application
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Application Id
   * @param {OptOutInventory} arg.body
   **/
  optOutFromApplication({ id, body } = {}) {
    const { error } = ConfigurationValidator.optOutFromApplication().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${id}/opt_out`,
      queryObj,
      body
    );
  }
}

class Marketplaces {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get available marketplace channels
    * @description: Get available marketplace channels
    * @param {Object} arg - arg object.
    
    **/
  getAvailableChannels({} = {}) {
    const { error } = MarketplacesValidator.getAvailableChannels().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/all-channels`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all registered marketplace channels for a seller
    * @description: Get all registered marketplace channels for a seller
    * @param {Object} arg - arg object.
    
    **/
  getChannels({} = {}) {
    const { error } = MarketplacesValidator.getChannels().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get registered marketplace channel credential configuration for a seller
    * @description: Get registered marketplace channel credentials configuration for a seller
    * @param {Object} arg - arg object.
    * @param {string} arg.channel - Name of marketplace channel
    
    **/
  getChannel({ channel } = {}) {
    const { error } = MarketplacesValidator.getChannel().validate(
      {
        channel,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Myntra marketplace channel for a seller
   * @description: Create Myntra marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {MyntraPayload} arg.body
   **/
  registerMyntraChannel({ body } = {}) {
    const { error } = MarketplacesValidator.registerMyntraChannel().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/myntra_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Myntra marketplace channel credentials for a seller
   * @description: Update Myntra marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {MyntraPayload} arg.body
   **/
  updateMyntraChannelCredentials({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateMyntraChannelCredentials().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/myntra_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Amazon marketplace channel for a seller
   * @description: Create Amazon marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {AmazonPayload} arg.body
   **/
  registerAmazonChannel({ body } = {}) {
    const { error } = MarketplacesValidator.registerAmazonChannel().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/amazon_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Amazon marketplace channel credentials for a seller
   * @description: Update Amazon marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {AmazonPayload} arg.body
   **/
  updateAmazonChannelCredentials({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateAmazonChannelCredentials().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/amazon_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Flipkart / Flipkart Assured marketplace channel for a seller
   * @description: Create Flipkart / Flipkart Assured marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.flipkartChannel - Name of marketplace channel
   * @param {FlipkartPayload} arg.body
   **/
  registerFlipkartChannel({ flipkartChannel, body } = {}) {
    const { error } = MarketplacesValidator.registerFlipkartChannel().validate(
      {
        flipkartChannel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${flipkartChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
   * @description: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.flipkartChannel - Name of marketplace channel
   * @param {FlipkartPayload} arg.body
   **/
  updateFlipkartChannelCredentials({ flipkartChannel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateFlipkartChannelCredentials().validate(
      {
        flipkartChannel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${flipkartChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
   * @description: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.tatacliqChannel - Name of marketplace channel
   * @param {TatacliqPayload} arg.body
   **/
  registerTatacliqChannel({ tatacliqChannel, body } = {}) {
    const { error } = MarketplacesValidator.registerTatacliqChannel().validate(
      {
        tatacliqChannel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${tatacliqChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Tatacliq / Tatacliq Luxury Assured marketplace channel credentials for a seller
   * @description: Update Tatacliq / Tatacliq Luxury marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.tatacliqChannel - Name of marketplace channel
   * @param {TatacliqPayload} arg.body
   **/
  updateTatacliqChannelCredentials({ tatacliqChannel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateTatacliqChannelCredentials().validate(
      {
        tatacliqChannel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${tatacliqChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Ajio marketplace channel for a seller
   * @description: Create Ajio marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {AjioPayload} arg.body
   **/
  registerAjioChannel({ body } = {}) {
    const { error } = MarketplacesValidator.registerAjioChannel().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/ajio_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Ajio marketplace channel credentials for a seller
   * @description: Update Ajio marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {AjioPayload} arg.body
   **/
  updateAjioChannelCredentials({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateAjioChannelCredentials().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/ajio_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update inventory sync configuration of marketplace channel for a seller
   * @description: Update inventory sync configuration of marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {string} [arg.validateCred] - Validate marketplace cred while saving inventory config
   * @param {InventorySyncConfig} arg.body
   **/
  updateChannelInventorySyncConfig({ channel, body, validateCred } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateChannelInventorySyncConfig().validate(
      {
        channel,
        body,
        validateCred,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["validate_cred"] = validateCred;

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/company/${this.config.companyId}/v1.0/channels/${channel}/inventory/config`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get marketplace channel location config for a seller
    * @description: Get marketplace channel location config for a seller
    * @param {Object} arg - arg object.
    * @param {string} arg.channel - Name of marketplace channel
    
    **/
  getChannelLocationConfig({ channel } = {}) {
    const { error } = MarketplacesValidator.getChannelLocationConfig().validate(
      {
        channel,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/location/config`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: update marketplace channel location config for a seller
   * @description: update marketplace channel location config for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {StoreMappingPayload} arg.body
   **/
  updateChannelLocationConfig({ channel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateChannelLocationConfig().validate(
      {
        channel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/location/config`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get marketplace channel active status for a seller
    * @description: Get marketplace channel active status for a seller
    * @param {Object} arg - arg object.
    * @param {string} arg.channel - Name of marketplace channel
    
    **/
  getChannelStatus({ channel } = {}) {
    const { error } = MarketplacesValidator.getChannelStatus().validate(
      {
        channel,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/status`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update marketplace channel active status for a seller
   * @description: Update marketplace channel active status for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {StatusPayload} arg.body
   **/
  updateChannelStatus({ channel, body } = {}) {
    const { error } = MarketplacesValidator.updateChannelStatus().validate(
      {
        channel,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/status`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Trigger marketplace channel inventory updates for a seller
   * @description: Trigger marketplace channel inventory updates for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {string} arg.updateType - Inventory update type
   * @param {SyncPayload} arg.body
   **/
  triggerChannelInventoryUpdates({ channel, updateType, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.triggerChannelInventoryUpdates().validate(
      {
        channel,
        updateType,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/inventory/${updateType}/sync`,
      queryObj,
      body
    );
  }
}

class Analytics {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Create data export job in required format
   * @description: Create data export job in required format
   * @param {Object} arg - arg object.
   * @param {string} arg.exportType - Export type / format
   * @param {ExportJobReq} arg.body
   **/
  createExportJob({ exportType, body } = {}) {
    const { error } = AnalyticsValidator.createExportJob().validate(
      {
        exportType,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/export/${exportType}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get data export job status
    * @description: Get data export job status
    * @param {Object} arg - arg object.
    * @param {string} arg.exportType - Export type / format
    * @param {string} arg.jobId - Export job id
    
    **/
  getExportJobStatus({ exportType, jobId } = {}) {
    const { error } = AnalyticsValidator.getExportJobStatus().validate(
      {
        exportType,
        jobId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/export/${exportType}/job/${jobId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Get logs list
   * @description: Get logs list
   * @param {Object} arg - arg object.
   * @param {string} arg.logType - Log type
   * @param {number} [arg.pageNo] - Current page number
   * @param {number} [arg.pageSize] - Current page size
   * @param {GetLogsListReq} arg.body
   **/
  getLogsList({ logType, body, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.getLogsList().validate(
      {
        logType,
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/logs/${logType}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get logs list
   * @description: Get logs list
   * @param {Object} arg - arg object.
   * @param {string} arg.logType - Log type
   * @param {number} [arg.pageSize] - Current page size
   * @param {GetLogsListReq} arg.body
   **/
  getLogsListPaginator({ logType, pageSize, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLogsList({
        logType: logType,
        body: body,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Search logs
   * @description: Search logs
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page number
   * @param {number} [arg.pageSize] - Current page size
   * @param {string} arg.logType - Log type
   * @param {SearchLogReq} arg.body
   **/
  searchLogs({ logType, body, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.searchLogs().validate(
      {
        logType,
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/logs/${logType}/search`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Search logs
   * @description: Search logs
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageSize] - Current page size
   * @param {string} arg.logType - Log type
   * @param {SearchLogReq} arg.body
   **/
  searchLogsPaginator({ pageSize, logType, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.searchLogs({
        logType: logType,
        body: body,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }
}

class Discount {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Fetch discount list.
    * @description: Fetch discount list.
    * @param {Object} arg - arg object.
    * @param {string} [arg.view] - listing or calender.  Default is listing.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a discount.
    * @param {number} [arg.pageNo] - page number. Default is 1.
    * @param {number} [arg.pageSize] - page size. Default is 12.
    * @param {boolean} [arg.archived] - archived. Default is false.
    * @param {number} [arg.month] - month. Default is current month.
    * @param {number} [arg.year] - year. Default is current year.
    * @param {string} [arg.type] - basic or custom.
    * @param {Array<string>} [arg.appIds] - application ids.
    
    **/
  getDiscounts({
    view,
    q,
    pageNo,
    pageSize,
    archived,
    month,
    year,
    type,
    appIds,
  } = {}) {
    const { error } = DiscountValidator.getDiscounts().validate(
      {
        view,
        q,
        pageNo,
        pageSize,
        archived,
        month,
        year,
        type,
        appIds,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["view"] = view;
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["archived"] = archived;
    queryObj["month"] = month;
    queryObj["year"] = year;
    queryObj["type"] = type;
    queryObj["app_ids"] = appIds;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Discount.
   * @description: Create Discount.
   * @param {Object} arg - arg object.
   * @param {CreateUpdateDiscount} arg.body
   **/
  createDiscount({ body } = {}) {
    const { error } = DiscountValidator.createDiscount().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Fetch discount.
    * @description: Fetch discount.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - unique id.
    
    **/
  getDiscount({ id } = {}) {
    const { error } = DiscountValidator.getDiscount().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Discount.
   * @description: Create Discount.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - id
   * @param {CreateUpdateDiscount} arg.body
   **/
  updateDiscount({ id, body } = {}) {
    const { error } = DiscountValidator.updateDiscount().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Validate File.
   * @description: Validate File.
   * @param {Object} arg - arg object.
   * @param {string} [arg.discount] - discount
   * @param {DiscountJob} arg.body
   **/
  validateDiscountFile({ body, discount } = {}) {
    const { error } = DiscountValidator.validateDiscountFile().validate(
      {
        body,
        discount,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["discount"] = discount;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Validate File.
   * @description: Validate File.
   * @param {Object} arg - arg object.
   * @param {string} arg.type - type
   * @param {DownloadFileJob} arg.body
   **/
  downloadDiscountFile({ type, body } = {}) {
    const { error } = DiscountValidator.downloadDiscountFile().validate(
      {
        type,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/${type}/download/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Validate File Job.
    * @description: Validate File Job.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - id
    
    **/
  getValidationJob({ id } = {}) {
    const { error } = DiscountValidator.getValidationJob().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Cancel Validation Job.
    * @description: Cancel Validation Job.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - id
    
    **/
  cancelValidationJob({ id } = {}) {
    const { error } = DiscountValidator.cancelValidationJob().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Download File Job.
    * @description: Download File Job.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - id
    
    **/
  getDownloadJob({ id } = {}) {
    const { error } = DiscountValidator.getDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/download/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Cancel Download Job.
    * @description: Cancel Download Job.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - id
    
    **/
  cancelDownloadJob({ id } = {}) {
    const { error } = DiscountValidator.cancelDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/download/${id}/`,
      queryObj,
      undefined
    );
  }
}

class Webhook {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get Subscribers By Company And Event
    * @description: Get Subscribers By Company And Event
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    * @param {number} arg.eventId - Event Id of the application
    
    **/
  getSubscribersByCompanyAndEventId({ eventId, pageNo, pageSize } = {}) {
    const {
      error,
    } = WebhookValidator.getSubscribersByCompanyAndEventId().validate(
      {
        eventId,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["event_id"] = eventId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber/${eventId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Register Subscriber
   * @description: Register Subscriber
   * @param {Object} arg - arg object.
   * @param {SubscriberConfig} arg.body
   **/
  registerSubscriberToEvent({ body } = {}) {
    const { error } = WebhookValidator.registerSubscriberToEvent().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Subscriber
   * @description: Update Subscriber
   * @param {Object} arg - arg object.
   * @param {SubscriberConfig} arg.body
   **/
  updateSubscriberConfig({ body } = {}) {
    const { error } = WebhookValidator.updateSubscriberConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber`,
      queryObj,
      body
    );
  }
}

module.exports = PlatformClient;
