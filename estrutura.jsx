<App>
    <div wrapper>
        <Header>
            <header header>
            </header>
        </Header>
        <main content>
            <List>
                <div list>
                    <header listheader>
                        <form newtaskform="">
                            <input newtask />
                            <button addnewtask></button>
                        </form>
                    </header>
                    <ListContent>
                        <div listContent>
                            <header listContentHeader>
                                <div listTaskCounter></div>
                                <div listDoneTaskCounter></div>
                            </header>
                            {/* se tasks.lenght === 0 */}
                            <div emptyList></div>
                            {/* se não */}
                            <main listItensContainer>
                                <ListItem>
                                    <div listItem>
                                        <button listItemToggleSelect></button>
                                        {/* se concluido, formatação com linha riscando o texto, se não sem formatação de linha*/}
                                        <p>{content}</p>
                                        <button listItemDelete></button>
                                    </div>                                    
                                </ListItem>
                            </main>
                        </div>

                    </ListContent>
                </div>
            </List>
        </main>
    </div>
</App>