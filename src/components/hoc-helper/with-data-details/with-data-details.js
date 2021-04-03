import React, { Component } from 'react'
import Spinner from "../../spinner"


const withDataDetails = (View, recordFilds, Record) => {
    return class extends Component {
        constructor() {
            super()
            this.state = {
                data: null,
                image: null,
                loading: false,
            }
        }

        updateItem() {
            const { itemId, getData, getImageURL } = this.props
            if (!itemId) { return }

            this.setState({ loading: true })


            getData(itemId).then(data => {
                this.setState({
                    data,
                    image: getImageURL(data),
                    loading: false
                })
            }).catch(error => {
                console.log(error)
            })
        }

        componentDidMount() {
            this.updateItem()
        }

        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId ||
                this.props.getData !== prevProps.getData ||
                this.props.getImageURL !== prevProps.getImageURL
            ) {
                this.updateItem()
            }
        }

        render() {

            if (!this.props.itemId) {
                return (
                    <div>
                        Please, pick up from list
                    </div>
                )
            }


            if (this.state.loading) {
                return <Spinner />
            }


            if (!this.state.data) {
                return <Spinner />
            }



            const { data, image } = this.state

            const records = recordFilds.map(({ label, field }, idx) => {
                return <Record label={label} field={field} key={idx} />
            })

            return (

                <View data={data} image={image}>
                    {records}
                </View>

            )
        }
    }
}

export default withDataDetails