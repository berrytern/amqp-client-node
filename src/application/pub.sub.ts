import { EventBus } from '../rabbitmq/connection/eventbus'
import { IOptions } from '../rabbitmq/port/configuration.inteface'
import { Topic } from '../communication/mode/topic'
import { Direct } from '../communication/mode/direct'
import { Fanout } from '../communication/mode/fanout'
import { WorkQueues } from '../communication/mode/work.queues'

export class PubSub<E extends EventBus>{

    protected host: string
    protected port: number
    protected username: string
    protected password: string
    protected options?: IOptions

    constructor(host: string, port: number, username: string, password: string, options?: IOptions){
        this.host = host
        this.port = port
        this.username = username
        this.password = password
        this.options = options
    }

    public createDirectInstance(): Direct {
        return new Direct(this.host, this.port, this.username, this.password, this.options )
    }

    public createTopicInstance(): Topic {
        return new Topic(this.host, this.port, this.username, this.password, this.options )
    }

    public createWorkerInstance(): WorkQueues {
        return new WorkQueues(this.host, this.port, this.username, this.password, this.options )
    }

    public createFanoutInstance(): Fanout {
        return new Fanout(this.host, this.port, this.username, this.password, this.options )
    }
}
