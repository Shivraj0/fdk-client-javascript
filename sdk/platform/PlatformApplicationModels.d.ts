export class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
      * @description: Gets the list of Application level Tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      
      **/
    getTickets({ items, filters }?: {
        items?: boolean;
        filters?: boolean;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a application level ticket
      * @description: Retreives ticket details of a application level ticket with ticket ID
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     **/
    editTicket({ ticketId, body }?: {
        ticketId: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistory({ ticketId, body }?: {
        ticketId: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Gets history list for specific application level ticket
      * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
      *
      * @summary: Get specific custom form using it's slug
      * @description: Get specific custom form using it's slug, this is used to view the form.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of form whose response is getting submitted
      
      **/
    getCustomForm({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {EditCustomFormPayload} arg.body
     **/
    editCustomForm({ slug, body }?: {
        slug: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Get list of custom form
      * @description: Get list of custom form for given application
      * @param {Object} arg - arg object.
      
      **/
    getCustomForms({}?: any): any;
    /**
     *
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     * @param {Object} arg - arg object.
     * @param {CreateCustomFormPayload} arg.body
     **/
    createCustomForm({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get Token to join a specific Video Room using it's unqiue name
      * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of video room
      
      **/
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
      *
      * @summary: Get participants of a specific Video Room using it's unique name
      * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
     *
     * @summary: Open a video room.
     * @description: Open a video room.
     * @param {Object} arg - arg object.
     * @param {CreateVideoRoomPayload} arg.body
     **/
    openVideoRoom({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Close the video room and force all participants to leave.
      * @description: Close the video room and force all participants to leave.
      * @param {Object} arg - arg object.
      
      **/
    closeVideoRoom({}?: any): any;
}
export class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets list of themes in theme library
      * @description: Gets list of themes in theme library
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getThemeLibrary({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
     *
     * @summary: Add theme to theme library
     * @description: Add theme to theme library
     * @param {Object} arg - arg object.
     * @param {AddThemeRequestSchema} arg.body
     **/
    addToThemeLibrary({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Apply theme
     * @description: Apply theme
     * @param {Object} arg - arg object.
     * @param {AddThemeRequestSchema} arg.body
     **/
    applyTheme({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Checks if theme is upgradable
      * @description: Checks if theme is upgradable
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    isUpgradable({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Upgrades theme
      * @description: Upgrades theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    upgradeTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Gets public themes
      * @description: Gets public themes
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getPublicThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
     *
     * @summary: Create new theme
     * @description: Create new theme
     * @param {Object} arg - arg object.
     * @param {ThemesSchema} arg.body
     **/
    createTheme({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get applied theme
      * @description: Get applied theme
      * @param {Object} arg - arg object.
      
      **/
    getAppliedTheme({}?: any): any;
    /**
      *
      * @summary: Gets fonts
      * @description: Gets fonts
      * @param {Object} arg - arg object.
      
      **/
    getFonts({}?: any): any;
    /**
      *
      * @summary: Gets theme by id
      * @description: Gets theme by id
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    getThemeById({ themeId }?: {
        themeId: string;
    }): any;
    /**
     *
     * @summary: Update theme
     * @description: Update theme
     * @param {Object} arg - arg object.
     * @param {string} arg.themeId - Theme ID
     * @param {ThemesSchema} arg.body
     **/
    updateTheme({ themeId, body }?: {
        themeId: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete theme
      * @description: Delete theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    deleteTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Gets theme for preview
      * @description: Gets theme for preview
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Publish theme
      * @description: Publish theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    publishTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Unpublish theme
      * @description: Unpublish theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    unpublishTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Archive theme
      * @description: Archive theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    archiveTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Unarchive theme
      * @description: Unarchive theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    unarchiveTheme({ themeId }?: {
        themeId: string;
    }): any;
}
export class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets list of customers
      * @description: Used to get application customers list
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getCustomers({ q, pageSize, pageNo }?: {
        q?: string;
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
      *
      * @summary: Search users
      * @description: Search users
      * @param {Object} arg - arg object.
      * @param {string} [arg.query] - The search query. This can be a partial or complete name of a either a product, brand or category
      
      **/
    searchUsers({ query }?: {
        query?: string;
    }): any;
    /**
      *
      * @summary: Get platform config
      * @description: Used to get platform config
      * @param {Object} arg - arg object.
      
      **/
    getPlatformConfig({}?: any): any;
    /**
     *
     * @summary: Update platform config
     * @description: Used to update platform config
     * @param {Object} arg - arg object.
     * @param {PlatformSchema} arg.body
     **/
    updatePlatformConfig({ body }?: {
        body: any;
    }): any;
}
export class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get annoucements list
      * @description: Get list of announcements
      * @param {Object} arg - arg object.
      
      **/
    getAnnouncementsList({}?: any): any;
    /**
     *
     * @summary: Create an annoucement
     * @description: Create an announcement
     * @param {Object} arg - arg object.
     * @param {AdminAnnouncementSchema} arg.body
     **/
    createAnnouncement({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get annoucement by id
      * @description: Get announcement by id
      * @param {Object} arg - arg object.
      * @param {string} arg.announcementId - Announcement ID
      
      **/
    getAnnouncementById({ announcementId }?: {
        announcementId: string;
    }): any;
    /**
     *
     * @summary: Update an annoucement
     * @description: Update an announcement
     * @param {Object} arg - arg object.
     * @param {string} arg.announcementId - Announcement ID
     * @param {AdminAnnouncementSchema} arg.body
     **/
    updateAnnouncement({ announcementId, body }?: {
        announcementId: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Update schedule or published status of an annoucement
     * @description: Update schedule or published status of an announcement
     * @param {Object} arg - arg object.
     * @param {string} arg.announcementId - Announcement ID
     * @param {ScheduleSchema} arg.body
     **/
    updateAnnouncementSchedule({ announcementId, body }?: {
        announcementId: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete annoucement by id
      * @description: Delete announcement by id
      * @param {Object} arg - arg object.
      * @param {string} arg.announcementId - Announcement ID
      
      **/
    deleteAnnouncement({ announcementId }?: {
        announcementId: string;
    }): any;
    /**
     *
     * @summary: Create blog
     * @description: Use this to create a blog.
     * @param {Object} arg - arg object.
     * @param {BlogRequest} arg.body
     **/
    createBlog({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get blogs
      * @description: Use this to get blogs.
      * @param {Object} arg - arg object.
      
      **/
    getBlogs({}?: any): any;
    /**
     *
     * @summary: Update blog
     * @description: Use this to update blog.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Blog Id
     * @param {BlogRequest} arg.body
     **/
    updateBlog({ id, body }?: {
        id: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete blogs
      * @description: Use this to delete blogs.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Blog Id
      
      **/
    deleteBlog({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get components by component Id
      * @description: The endpoint fetches the component by component Id
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - slug of page to be fetched
      
      **/
    getComponentById({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get FAQ categories list
      * @description: Get list of FAQ categories
      * @param {Object} arg - arg object.
      
      **/
    getFaqCategories({}?: any): any;
    /**
      *
      * @summary: Get FAQ category by slug or id
      * @description: Get FAQ category by slug or id
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ Category
      
      **/
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
     *
     * @summary: Creates a FAQ category
     * @description: Add Faq Category
     * @param {Object} arg - arg object.
     * @param {CreateFaqCategoryRequestSchema} arg.body
     **/
    createFaqCategory({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Updates a FAQ category
     * @description: Update Faq Category
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Faq category ID
     * @param {UpdateFaqCategoryRequestSchema} arg.body
     **/
    updateFaqCategory({ id, body }?: {
        id: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Deletes a FAQ category
      * @description: Delete Faq Category
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Faq category ID
      
      **/
    deleteFaqCategory({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get FAQs of a Faq Category id or slug
      * @description: Get FAQs of a Faq Category `id` or `slug`
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Faq category ID or slug
      
      **/
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
     *
     * @summary: Creates FAQs for category whose `id` is specified
     * @description: Creates FAQs for category whose `id` is specified
     * @param {Object} arg - arg object.
     * @param {string} arg.categoryId - Faq category ID
     * @param {CreateFaqSchema} arg.body
     **/
    addFaq({ categoryId, body }?: {
        categoryId: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Updates FAQ
     * @description: Updates FAQ
     * @param {Object} arg - arg object.
     * @param {string} arg.categoryId - Faq category ID
     * @param {string} arg.faqId - Faq ID
     * @param {CreateFaqSchema} arg.body
     **/
    updateFaq({ categoryId, faqId, body }?: {
        categoryId: string;
        faqId: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete FAQ
      * @description: Delete FAQ
      * @param {Object} arg - arg object.
      * @param {string} arg.categoryId - Faq category ID
      * @param {string} arg.faqId - Faq ID
      
      **/
    deleteFaq({ categoryId, faqId }?: {
        categoryId: string;
        faqId: string;
    }): any;
    /**
      *
      * @summary: Get frequently asked question
      * @description: Get frequently asked questions list. These will be helpful for users to using website.
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ
      
      **/
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
      *
      * @summary: Get landing-pages
      * @description: Use this to get landing-pages.
      * @param {Object} arg - arg object.
      
      **/
    getLandingPages({}?: any): any;
    /**
     *
     * @summary: Create landing-page
     * @description: Use this to create landing-page.
     * @param {Object} arg - arg object.
     * @param {LandingPageRequest} arg.body
     **/
    createLandingPage({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update landing-page
     * @description: Use this to update landing-page.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Landing page ID
     * @param {LandingPageRequest} arg.body
     **/
    updateLandingPage({ id, body }?: {
        id: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete landing-page
      * @description: Use this to delete landing-page.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Landing page ID
      
      **/
    deleteLandingPage({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get legal information
      * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
      * @param {Object} arg - arg object.
      
      **/
    getLegalInformation({}?: any): any;
    /**
     *
     * @summary: Save legal information
     * @description: Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
     * @param {Object} arg - arg object.
     * @param {ApplicationLegal} arg.body
     **/
    updateLegalInformation({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get navigations
      * @description: Use this to get navigations.
      * @param {Object} arg - arg object.
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getNavigations({ devicePlatform }?: {
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Create navigation
     * @description: Use this to create navigation.
     * @param {Object} arg - arg object.
     * @param {NavigationRequest} arg.body
     **/
    createNavigation({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get default navigations
      * @description: Use this to get default navigations.
      * @param {Object} arg - arg object.
      
      **/
    getDefaultNavigations({}?: any): any;
    /**
      *
      * @summary: Get navigation by slug
      * @description: Use this to get navigation by slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getNavigationBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Update navigation
     * @description: Use this to update navigation.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Navigation ID
     * @param {NavigationRequest} arg.body
     **/
    updateNavigation({ id, body }?: {
        id: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete navigation
      * @description: Use this to delete navigation.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Navigation ID
      
      **/
    deleteNavigation({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get page meta
      * @description: Use this to get Page Meta.
      * @param {Object} arg - arg object.
      
      **/
    getPageMeta({}?: any): any;
    /**
      *
      * @summary: Get page spec
      * @description: Use this to get page spec.
      * @param {Object} arg - arg object.
      
      **/
    getPageSpec({}?: any): any;
    /**
     *
     * @summary: Create page
     * @description: Use this to create a page.
     * @param {Object} arg - arg object.
     * @param {PageRequest} arg.body
     **/
    createPage({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get pages
      * @description: Use this to get pages.
      * @param {Object} arg - arg object.
      
      **/
    getPages({}?: any): any;
    /**
     *
     * @summary: Create page preview
     * @description: Use this to create a page preview.
     * @param {Object} arg - arg object.
     * @param {PageRequest} arg.body
     **/
    createPagePreview({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update page
     * @description: Use this to update page.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Page publish slug
     * @param {PagePublishRequest} arg.body
     **/
    updatePagePreview({ slug, body }?: {
        slug: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Update page
     * @description: Use this to update page.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Page Id
     * @param {PageRequest} arg.body
     **/
    updatePage({ id, body }?: {
        id: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete page
      * @description: Use this to delete page.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Page Id
      
      **/
    deletePage({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get pages by component Id
      * @description: The endpoint fetches the component by component Id
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of page to be fetched
      
      **/
    getPageBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get seo of application
      * @description: Get seo of application
      * @param {Object} arg - arg object.
      
      **/
    getSeoConfiguration({}?: any): any;
    /**
     *
     * @summary: Update seo of application
     * @description: Update seo of application
     * @param {Object} arg - arg object.
     * @param {Seo} arg.body
     **/
    updateSeoConfiguration({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get slideshows
      * @description: Use this to get slideshows.
      * @param {Object} arg - arg object.
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getSlideshows({ devicePlatform }?: {
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Create slideshow
     * @description: Use this to create slideshow.
     * @param {Object} arg - arg object.
     * @param {SlideshowRequest} arg.body
     **/
    createSlideshow({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get slideshow by slug
      * @description: Use this to get slideshow by slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getSlideshowBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Update slideshow
     * @description: Use this to update slideshow.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Slideshow ID
     * @param {SlideshowRequest} arg.body
     **/
    updateSlideshow({ id, body }?: {
        id: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete slideshow
      * @description: Use this to delete slideshow.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Slideshow ID
      
      **/
    deleteSlideshow({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get support information
      * @description: Get contact details for customer support. Including emails and phone numbers
      * @param {Object} arg - arg object.
      
      **/
    getSupportInformation({}?: any): any;
    /**
     *
     * @summary: Update support data of application
     * @description: Update support data of application
     * @param {Object} arg - arg object.
     * @param {Support} arg.body
     **/
    updateSupportInformation({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Creates Tag
     * @description: Create tags
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    createInjectableTag({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Updates a Tag
     * @description: Update tag
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    updateInjectableTag({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Delete tags for application
      * @description: Delete tags for application
      * @param {Object} arg - arg object.
      
      **/
    deleteAllInjectableTags({}?: any): any;
    /**
      *
      * @summary: Get tags for application
      * @description: Get tags for application
      * @param {Object} arg - arg object.
      
      **/
    getInjectableTags({}?: any): any;
    /**
     *
     * @summary: Adds a Tag
     * @description: Add tag
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    addInjectableTag({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Removes a Tag
     * @description: Remove a particular tag
     * @param {Object} arg - arg object.
     * @param {RemoveHandpickedSchema} arg.body
     **/
    removeInjectableTag({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Edits a Tag by Id
     * @description: Edits a particular tag
     * @param {Object} arg - arg object.
     * @param {string} arg.tagId - Tag ID
     * @param {UpdateHandpickedSchema} arg.body
     **/
    editInjectableTag({ tagId, body }?: {
        tagId: string;
        body: any;
    }): any;
}
export class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get All Brand Payment Gateway Config Secret
      * @description: Get All Brand Payment Gateway Config Secret
      * @param {Object} arg - arg object.
      
      **/
    getBrandPaymentGatewayConfig({}?: any): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    saveBrandPaymentGatewayConfig({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    updateBrandPaymentGatewayConfig({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get All Valid Payment Options
      * @description: Use this API to get Get All Valid Payment Options for making payment
      * @param {Object} arg - arg object.
      * @param {boolean} arg.refresh -
      * @param {string} arg.requestType -
      
      **/
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): any;
}
export class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get with single coupon details or coupon list
      * @description: Get coupon list with pagination
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      * @param {boolean} [arg.isArchived] -
      * @param {string} [arg.title] -
      * @param {boolean} [arg.isPublic] -
      * @param {boolean} [arg.isDisplay] -
      * @param {string} [arg.typeSlug] -
      * @param {string} [arg.code] -
      
      **/
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        pageNo?: number;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): any;
    /**
     *
     * @summary: Create new coupon
     * @description: Create new coupon
     * @param {Object} arg - arg object.
     * @param {CouponAdd} arg.body
     **/
    createCoupon({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get with single coupon details or coupon list
      * @description: Get single coupon details with `id` in path param
      * @param {Object} arg - arg object.
      * @param {string} arg.id -
      
      **/
    getCouponById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     * @param {Object} arg - arg object.
     * @param {string} arg.id -
     * @param {CouponUpdate} arg.body
     **/
    updateCoupon({ id, body }?: {
        id: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     * @param {Object} arg - arg object.
     * @param {string} arg.id -
     * @param {CouponPartialUpdate} arg.body
     **/
    updateCouponPartially({ id, body }?: {
        id: string;
        body: any;
    }): any;
}
