class Tags {
    constructor()
    {
        this.tagList = [];
        this.activeTag = '';
        //this.listLength = 0;
    }
    
    //Add a new tag to list, name is the name of the new tag
    addTag(name)
    {
        this.tagList.push(`${name}`);
        //this.listLength++;
    }

    //set active tag
    selectTag(name)
    {
        this.activeTag = `${name}`;
    }

    //deselect tags
    deselectTag()
    {
        this.activeTag = '';
    }
}


export {Tags};